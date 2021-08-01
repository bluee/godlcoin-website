import React from 'react'
import DailyTaskCard from './DailyTaskCard'

const GoogleCard = ({ taskCompleted, setTaskCompleted }) => (
  <DailyTaskCard
    title="Google"
    logo={require('../../img/logo_google.svg')}
    taskCompleted={taskCompleted}
    setTaskCompleted={setTaskCompleted}
  >
    <p>
      Searching for these terms on Google increases their ranking, causing more
      people to get them as suggestions.
    </p>

    <div>
      <a href="https://www.google.com/search?q=godl+coin&source=hp&ei=DFcFYemOL-SH9u8P-92z0AY&iflsig=AINFCbYAAAAAYQVlHPfepZgXtzK2TvEiBFJ6XJ2A24ra&oq=godl+coin&gs_lcp=Cgdnd3Mtd2l6EAMyBAgAEAoyBAgAEAoyBAgAEAoyBAgAEAoyBAgAEAoyBAgAEAoyBAgAEAoyBAgAEAoyBAgAEAoyBAgAEAo6CwgAEIAEELEDEIMBOggIABCABBCxAzoRCC4QgAQQsQMQgwEQxwEQrwE6CAgAELEDEIMBOg4ILhCABBCxAxDHARCjAjoFCAAQgAQ6CwguEIAEELEDEJMCOggILhCABBCxAzoOCC4QgAQQsQMQxwEQrwE6DgguELEDEIMBEMcBEK8BOgsILhCABBDHARCvAToOCC4QgAQQsQMQgwEQkwI6BwgAEIAEEAo6BQguEIAEOgcIABCxAxAKOgoILhCxAxCDARAKOgcILhCxAxAKOgQILhAKOgYILhAKEAM6DQguELEDEIMBEAoQkwI6BggAEAoQAzoKCC4QxwEQrwEQCjoKCC4QsQMQChCTAlDHDljOHmDrIGgAcAB4AIABkAGIAYMHkgEDNS40mAEAoAEB&sclient=gws-wiz&ved=0ahUKEwjpxJrcu43yAhXkg_0HHfvuDGoQ4dUDCAY&uact=5"
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn--medium btn--blue "
      >
        Search Google for "Godl Coin"
      </a><br/>
      <a href="https://www.google.com/search?q=godl+free+eth&source=hp&ei=MVcFYeOPGNqA9u8P25mE4AM&iflsig=AINFCbYAAAAAYQVlQUVvjv1iMW9-T5vNWd6yDVQ4Szke&oq=godl+free+eth&gs_lcp=Cgdnd3Mtd2l6EAM6BAgAEEM6CwgAEIAEELEDEIMBOggIABCABBCxAzoRCC4QgAQQsQMQgwEQxwEQrwE6CAgAELEDEIMBOgUIABCABDoHCAAQsQMQQzoICC4QgAQQsQM6BwguELEDEEM6DgguEIAEELEDEMcBEK8BOgQILhBDOg4ILhCABBCxAxCDARCTAjoHCAAQgAQQCjoHCAAQsQMQCjoKCC4QsQMQgwEQCjoHCC4QsQMQCjoECC4QCjoECAAQCjoGCC4QChADOgcILhAKEJMCOgQIABANOgYIABANEAo6BggAEA0QHjoGCAAQFhAeOgQIABATOggIABAWEB4QEzoKCAAQFhAKEB4QEzoICAAQCBANEB5KBQhAEgExUN4MWKcbYLEdaABwAHgAgAF7iAHGCZIBAzcuNpgBAKABAQ&sclient=gws-wiz&ved=0ahUKEwij7NXtu43yAhVagP0HHdsMATwQ4dUDCAY&uact=5"
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn--medium btn--blue"
      >
        Search Google for "Godl free ETH"
      </a>
    </div>

    <p>
      Of course, feel free to do any amount of additional searches for even more
      effect!
    </p>
  </DailyTaskCard>
)

export default GoogleCard
