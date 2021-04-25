import actions from '@/store/modules/survey/actions'
import faker from 'faker'
import axios from 'axios'

jest.mock('axios')

describe('actions', () => {
  describe('sendToApi', () => {
    let state
    let commit
    let mockResponse

    beforeEach(() => {
      commit = jest.fn()
      state = {
        name: faker.internet.userName(),
        goals: faker.hacker.phrase().split(),
        diet: faker.lorem.word(),
        dob: faker.date.past()
      }
    })

    describe('Successful response', () => {
      beforeEach(() => {
        mockResponse = { status: 201 }
        axios.post.mockImplementationOnce(() => Promise.resolve(mockResponse))
      })

      it('should resolve the dispatch call with true', async () => {
        expect.assertions(2)

        try {
          const isCreated = await actions.sendToApi({ commit, state })
          expect(isCreated).toBeTruthy()
          expect(commit).toBeCalled()
        } catch (error) {
          expect(error).toBeFalsy()
        }
      })
    })

    describe('Failed response', () => {
      beforeEach(() => {
        mockResponse = { status: 400 }
        axios.post.mockImplementationOnce(() => Promise.reject(mockResponse))
      })

      it('should resolve the dispatch call with false', async () => {
        const isUserCreated = await actions.sendToApi({ commit, state })
        expect(isUserCreated).toBeFalsy()
      })
    })
  })
})
