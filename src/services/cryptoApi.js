import { createApi,fetchBaseQuery } from "@reduxjs/toolkit/query/react";


const cryptoApiHeaders = {
     'X-RapidAPI-Key': 'df2963f903mshdbe5dd914a87e56p1b25d3jsnebfb8d391054',
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
}
const baseUrl='https://coinranking1.p.rapidapi.com/'

const options = {
  params: {
    referenceCurrencyUuid: 'yhjMzLPhuIDl',
    timePeriod: '24h'
  },
  headers: {
    'X-RapidAPI-Key': 'df2963f903mshdbe5dd914a87e56p1b25d3jsnebfb8d391054',
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
  }
};



const createRequest=(url)=>({url,headers:cryptoApiHeaders});


export const cryptoApi=createApi({
    reducerPath:'cryptoApi',
    baseQuery:fetchBaseQuery({baseUrl}),
    headers:cryptoApiHeaders,
    endpoints:(builder)=>({
        getCryptos:builder.query({
            query:()=>createRequest('/coins')
        })
    })
})

export const {useGetCryptosQuery}=cryptoApi;

