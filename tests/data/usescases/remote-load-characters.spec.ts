import { HttpStatusCode } from '../../../src/data/protocols/http'
import { RemoteLoadCharacters } from '../../../src/data/usecases'
import { TooManyRequestsError, UnexpectedError } from '../../../src/domain/errors'
import { LoadCharactersResult } from '../../../src/domain/usecases'
import { HttpClientSpy, mockCharacterList, mockMetaData } from '../mocks'

const makeSut = (url = 'any_url') => {
	const httpClientSpy = new HttpClientSpy<LoadCharactersResult>()
	const sut = new RemoteLoadCharacters(url, httpClientSpy)
	return {
		sut,
		httpClientSpy
	}
}

describe('RemoteLoadCharacters', () => {
	test('Should call HttpClient with correct URL and Method', async () => {
		const url = 'any_url'
		const { httpClientSpy, sut } = makeSut(url)

		await sut.loadAll()

		expect(httpClientSpy.url).toBe(url)
		expect(httpClientSpy.method).toBe('get')
	})

	test('Should throw TooManyRequestsError if HttpClient returns 429', () => {
		const { httpClientSpy, sut } = makeSut()
		httpClientSpy.response = {
			statusCode: HttpStatusCode.tooManyRequests
		}

		const httpResponse = sut.loadAll()

		expect(httpResponse).rejects.toThrow(new TooManyRequestsError())
	})

	test('Should throw UnexpectedError if HttpClient returns 500', () => {
		const { httpClientSpy, sut } = makeSut()
		httpClientSpy.response = {
			statusCode: HttpStatusCode.serverError
		}

		const httpResponse = sut.loadAll()

		expect(httpResponse).rejects.toThrow(new UnexpectedError())
	})
})
