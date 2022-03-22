import axios from "axios"

const apiURL: string = process.env.REACT_APP_API_URL as string

export const checkSentence = async (sentence: string): Promise<string[] | undefined> => {
  try {
    const payload  = { sentence };
    const { data } = await axios.post(`${apiURL}/check`, payload);
    return data;
  } catch (error) {
    console.log(error)
  }
}