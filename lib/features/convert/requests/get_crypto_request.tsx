import { apiClient } from '../../../core/api/api_client'
import { TCryptoNames } from '../types/crypto_names'

export const getCryptoRequest = async (
  cryptoKey: TCryptoNames
) => {
  return apiClient.get(`${cryptoKey}/list`)
}
