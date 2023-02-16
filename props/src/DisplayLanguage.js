import React from 'react'
import LanguageContext from './LanguageContext'

const Strings = {
  en: {
    CURRENT_LANGUAGE: 'Current language: English.',
  },

  el: {
    CURRENT_LANGUAGE: 'Τρέχουσα γλώσσα: Ελληνικά.',
  },
}

class DisplayLanguage extends React.Component {
  render() {
    return (
      <div>
        <LanguageContext.Consumer>
          {(language) => {
            return <h1>{Strings[language].CURRENT_LANGUAGE}</h1>
          }}
        </LanguageContext.Consumer>
      </div>
    )
  }
}

export default DisplayLanguage
