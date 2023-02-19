import { useContext } from "react"
import LanguageContext from "./LanguageContext"

const Strings = {
  en: {
    CURRENT_LANGUAGE: 'Current language: English.',
  },

  el: {
    CURRENT_LANGUAGE: 'Τρέχουσα γλώσσα: Ελληνικά.',
  },
}

function DisplayLanguage2() {
  const language = useContext(LanguageContext)
  return (
    <h1>{Strings[language]["CURRENT_LANGUAGE"]}</h1>
  )
}

export default DisplayLanguage2