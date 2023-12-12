import React from 'react'
import { useSelector } from 'react-redux'
import { lang } from '../utils/lang';

const GptSearchBar = () => {
    const languageKey=useSelector(store=>store.language.lang)
  return (
    <div className='flex justify-center pt-[10%] '>
        <div className='z-10 absolute  grid grid-cols-12 w-1/2 bg-blue-200 p-2  '>
        <input type="text" placeholder={lang[languageKey].gptPlaceholder} className='grid col-span-9 p-3' />
        <button className=' px-5 py-3 grid col-span-3 bg-purple-300 text-white'>{lang[languageKey].search}</button></div>
    </div>
  )
}

export default GptSearchBar