const VERB_SETS = {
  "Present": [
    {
      "en": "I is",
      "es": "je suis"
    },
    {
      "en": "I do not is",
      "es": "je ne suis pas"
    },
    {
      "en": "You is",
      "es": "tu es"
    },
    {
      "en": "You do not is",
      "es": "tu ne es pas"
    },
    {
      "en": "He is",
      "es": "il est"
    },
    {
      "en": "He do not is",
      "es": "il ne est pas"
    },
    {
      "en": "She is",
      "es": "nous sommes"
    },
    {
      "en": "She do not is",
      "es": "nous ne sommes pas"
    },
    {
      "en": "We is",
      "es": "vous êtes"
    },
    {
      "en": "We do not is",
      "es": "vous ne êtes pas"
    },
    {
      "en": "They is",
      "es": "ils sont"
    },
    {
      "en": "They do not is",
      "es": "ils ne sont pas"
    },
    {
      "en": "I have",
      "es": "j'ai"
    },
    {
      "en": "I do not have",
      "es": "ne j'ai pas"
    },
    {
      "en": "You have",
      "es": "tu as"
    },
    {
      "en": "You do not have",
      "es": "tu ne as pas"
    },
    {
      "en": "He have",
      "es": "il a"
    },
    {
      "en": "He do not have",
      "es": "il ne a pas"
    },
    {
      "en": "She have",
      "es": "nous avons"
    },
    {
      "en": "She do not have",
      "es": "nous ne avons pas"
    },
    {
      "en": "We have",
      "es": "vous avez"
    },
    {
      "en": "We do not have",
      "es": "vous ne avez pas"
    },
    {
      "en": "They have",
      "es": "ils ont"
    },
    {
      "en": "They do not have",
      "es": "ils ne ont pas"
    },
    {
      "en": "I go",
      "es": "je vais"
    },
    {
      "en": "I do not go",
      "es": "je ne vais pas"
    },
    {
      "en": "You go",
      "es": "tu vas"
    },
    {
      "en": "You do not go",
      "es": "tu ne vas pas"
    },
    {
      "en": "He go",
      "es": "il va"
    },
    {
      "en": "He do not go",
      "es": "il ne va pas"
    },
    {
      "en": "She go",
      "es": "nous allons"
    },
    {
      "en": "She do not go",
      "es": "nous ne allons pas"
    },
    {
      "en": "We go",
      "es": "vous allez"
    },
    {
      "en": "We do not go",
      "es": "vous ne allez pas"
    },
    {
      "en": "They go",
      "es": "ils vont"
    },
    {
      "en": "They do not go",
      "es": "ils ne vont pas"
    },
    {
      "en": "I do",
      "es": "je fais"
    },
    {
      "en": "I do not do",
      "es": "je ne fais pas"
    },
    {
      "en": "You do",
      "es": "tu fais"
    },
    {
      "en": "You do not do",
      "es": "tu ne fais pas"
    },
    {
      "en": "He do",
      "es": "il fait"
    },
    {
      "en": "He do not do",
      "es": "il ne fait pas"
    },
    {
      "en": "She do",
      "es": "nous faisons"
    },
    {
      "en": "She do not do",
      "es": "nous ne faisons pas"
    },
    {
      "en": "We do",
      "es": "vous faites"
    },
    {
      "en": "We do not do",
      "es": "vous ne faites pas"
    },
    {
      "en": "They do",
      "es": "ils font"
    },
    {
      "en": "They do not do",
      "es": "ils ne font pas"
    },
    {
      "en": "I speak",
      "es": "je parle"
    },
    {
      "en": "I do not speak",
      "es": "je ne parle pas"
    },
    {
      "en": "You speak",
      "es": "tu parles"
    },
    {
      "en": "You do not speak",
      "es": "tu ne parles pas"
    },
    {
      "en": "He speak",
      "es": "il parle"
    },
    {
      "en": "He do not speak",
      "es": "il ne parle pas"
    },
    {
      "en": "She speak",
      "es": "nous parlons"
    },
    {
      "en": "She do not speak",
      "es": "nous ne parlons pas"
    },
    {
      "en": "We speak",
      "es": "vous parlez"
    },
    {
      "en": "We do not speak",
      "es": "vous ne parlez pas"
    },
    {
      "en": "They speak",
      "es": "ils parlent"
    },
    {
      "en": "They do not speak",
      "es": "ils ne parlent pas"
    },
    {
      "en": "I finish",
      "es": "je finis"
    },
    {
      "en": "I do not finish",
      "es": "je ne finis pas"
    },
    {
      "en": "You finish",
      "es": "tu finis"
    },
    {
      "en": "You do not finish",
      "es": "tu ne finis pas"
    },
    {
      "en": "He finish",
      "es": "il finit"
    },
    {
      "en": "He do not finish",
      "es": "il ne finit pas"
    },
    {
      "en": "She finish",
      "es": "nous finissons"
    },
    {
      "en": "She do not finish",
      "es": "nous ne finissons pas"
    },
    {
      "en": "We finish",
      "es": "vous finissez"
    },
    {
      "en": "We do not finish",
      "es": "vous ne finissez pas"
    },
    {
      "en": "They finish",
      "es": "ils finissent"
    },
    {
      "en": "They do not finish",
      "es": "ils ne finissent pas"
    },
    {
      "en": "I take",
      "es": "je prends"
    },
    {
      "en": "I do not take",
      "es": "je ne prends pas"
    },
    {
      "en": "You take",
      "es": "tu prends"
    },
    {
      "en": "You do not take",
      "es": "tu ne prends pas"
    },
    {
      "en": "He take",
      "es": "il prend"
    },
    {
      "en": "He do not take",
      "es": "il ne prend pas"
    },
    {
      "en": "She take",
      "es": "nous prenons"
    },
    {
      "en": "She do not take",
      "es": "nous ne prenons pas"
    },
    {
      "en": "We take",
      "es": "vous prenez"
    },
    {
      "en": "We do not take",
      "es": "vous ne prenez pas"
    },
    {
      "en": "They take",
      "es": "ils prennent"
    },
    {
      "en": "They do not take",
      "es": "ils ne prennent pas"
    },
    {
      "en": "I come",
      "es": "je viens"
    },
    {
      "en": "I do not come",
      "es": "je ne viens pas"
    },
    {
      "en": "You come",
      "es": "tu viens"
    },
    {
      "en": "You do not come",
      "es": "tu ne viens pas"
    },
    {
      "en": "He come",
      "es": "il vient"
    },
    {
      "en": "He do not come",
      "es": "il ne vient pas"
    },
    {
      "en": "She come",
      "es": "nous venons"
    },
    {
      "en": "She do not come",
      "es": "nous ne venons pas"
    },
    {
      "en": "We come",
      "es": "vous venez"
    },
    {
      "en": "We do not come",
      "es": "vous ne venez pas"
    },
    {
      "en": "They come",
      "es": "ils viennent"
    },
    {
      "en": "They do not come",
      "es": "ils ne viennent pas"
    },
    {
      "en": "I can",
      "es": "je peux"
    },
    {
      "en": "I do not can",
      "es": "je ne peux pas"
    },
    {
      "en": "You can",
      "es": "tu peux"
    },
    {
      "en": "You do not can",
      "es": "tu ne peux pas"
    },
    {
      "en": "He can",
      "es": "il peut"
    },
    {
      "en": "He do not can",
      "es": "il ne peut pas"
    },
    {
      "en": "She can",
      "es": "nous pouvons"
    },
    {
      "en": "She do not can",
      "es": "nous ne pouvons pas"
    },
    {
      "en": "We can",
      "es": "vous pouvez"
    },
    {
      "en": "We do not can",
      "es": "vous ne pouvez pas"
    },
    {
      "en": "They can",
      "es": "ils peuvent"
    },
    {
      "en": "They do not can",
      "es": "ils ne peuvent pas"
    },
    {
      "en": "I want",
      "es": "je veux"
    },
    {
      "en": "I do not want",
      "es": "je ne veux pas"
    },
    {
      "en": "You want",
      "es": "tu veux"
    },
    {
      "en": "You do not want",
      "es": "tu ne veux pas"
    },
    {
      "en": "He want",
      "es": "il veut"
    },
    {
      "en": "He do not want",
      "es": "il ne veut pas"
    },
    {
      "en": "She want",
      "es": "nous voulons"
    },
    {
      "en": "She do not want",
      "es": "nous ne voulons pas"
    },
    {
      "en": "We want",
      "es": "vous voulez"
    },
    {
      "en": "We do not want",
      "es": "vous ne voulez pas"
    },
    {
      "en": "They want",
      "es": "ils veulent"
    },
    {
      "en": "They do not want",
      "es": "ils ne veulent pas"
    },
    {
      "en": "I must",
      "es": "je dois"
    },
    {
      "en": "I do not must",
      "es": "je ne dois pas"
    },
    {
      "en": "You must",
      "es": "tu dois"
    },
    {
      "en": "You do not must",
      "es": "tu ne dois pas"
    },
    {
      "en": "He must",
      "es": "il doit"
    },
    {
      "en": "He do not must",
      "es": "il ne doit pas"
    },
    {
      "en": "She must",
      "es": "nous devons"
    },
    {
      "en": "She do not must",
      "es": "nous ne devons pas"
    },
    {
      "en": "We must",
      "es": "vous devez"
    },
    {
      "en": "We do not must",
      "es": "vous ne devez pas"
    },
    {
      "en": "They must",
      "es": "ils doivent"
    },
    {
      "en": "They do not must",
      "es": "ils ne doivent pas"
    },
    {
      "en": "I see",
      "es": "je vois"
    },
    {
      "en": "I do not see",
      "es": "je ne vois pas"
    },
    {
      "en": "You see",
      "es": "tu vois"
    },
    {
      "en": "You do not see",
      "es": "tu ne vois pas"
    },
    {
      "en": "He see",
      "es": "il voit"
    },
    {
      "en": "He do not see",
      "es": "il ne voit pas"
    },
    {
      "en": "She see",
      "es": "nous voyons"
    },
    {
      "en": "She do not see",
      "es": "nous ne voyons pas"
    },
    {
      "en": "We see",
      "es": "vous voyez"
    },
    {
      "en": "We do not see",
      "es": "vous ne voyez pas"
    },
    {
      "en": "They see",
      "es": "ils voient"
    },
    {
      "en": "They do not see",
      "es": "ils ne voient pas"
    },
    {
      "en": "I know",
      "es": "je sais"
    },
    {
      "en": "I do not know",
      "es": "je ne sais pas"
    },
    {
      "en": "You know",
      "es": "tu sais"
    },
    {
      "en": "You do not know",
      "es": "tu ne sais pas"
    },
    {
      "en": "He know",
      "es": "il sait"
    },
    {
      "en": "He do not know",
      "es": "il ne sait pas"
    },
    {
      "en": "She know",
      "es": "nous savons"
    },
    {
      "en": "She do not know",
      "es": "nous ne savons pas"
    },
    {
      "en": "We know",
      "es": "vous savez"
    },
    {
      "en": "We do not know",
      "es": "vous ne savez pas"
    },
    {
      "en": "They know",
      "es": "ils savent"
    },
    {
      "en": "They do not know",
      "es": "ils ne savent pas"
    },
    {
      "en": "I put",
      "es": "je mets"
    },
    {
      "en": "I do not put",
      "es": "je ne mets pas"
    },
    {
      "en": "You put",
      "es": "tu mets"
    },
    {
      "en": "You do not put",
      "es": "tu ne mets pas"
    },
    {
      "en": "He put",
      "es": "il met"
    },
    {
      "en": "He do not put",
      "es": "il ne met pas"
    },
    {
      "en": "She put",
      "es": "nous mettons"
    },
    {
      "en": "She do not put",
      "es": "nous ne mettons pas"
    },
    {
      "en": "We put",
      "es": "vous mettez"
    },
    {
      "en": "We do not put",
      "es": "vous ne mettez pas"
    },
    {
      "en": "They put",
      "es": "ils mettent"
    },
    {
      "en": "They do not put",
      "es": "ils ne mettent pas"
    },
    {
      "en": "I go out",
      "es": "je sors"
    },
    {
      "en": "I do not go out",
      "es": "je ne sors pas"
    },
    {
      "en": "You go out",
      "es": "tu sors"
    },
    {
      "en": "You do not go out",
      "es": "tu ne sors pas"
    },
    {
      "en": "He go out",
      "es": "il sort"
    },
    {
      "en": "He do not go out",
      "es": "il ne sort pas"
    },
    {
      "en": "She go out",
      "es": "nous sortons"
    },
    {
      "en": "She do not go out",
      "es": "nous ne sortons pas"
    },
    {
      "en": "We go out",
      "es": "vous sortez"
    },
    {
      "en": "We do not go out",
      "es": "vous ne sortez pas"
    },
    {
      "en": "They go out",
      "es": "ils sortent"
    },
    {
      "en": "They do not go out",
      "es": "ils ne sortent pas"
    },
    {
      "en": "I leave",
      "es": "je pars"
    },
    {
      "en": "I do not leave",
      "es": "je ne pars pas"
    },
    {
      "en": "You leave",
      "es": "tu pars"
    },
    {
      "en": "You do not leave",
      "es": "tu ne pars pas"
    },
    {
      "en": "He leave",
      "es": "il part"
    },
    {
      "en": "He do not leave",
      "es": "il ne part pas"
    },
    {
      "en": "She leave",
      "es": "nous partons"
    },
    {
      "en": "She do not leave",
      "es": "nous ne partons pas"
    },
    {
      "en": "We leave",
      "es": "vous partez"
    },
    {
      "en": "We do not leave",
      "es": "vous ne partez pas"
    },
    {
      "en": "They leave",
      "es": "ils partent"
    },
    {
      "en": "They do not leave",
      "es": "ils ne partent pas"
    },
    {
      "en": "I say",
      "es": "je dis"
    },
    {
      "en": "I do not say",
      "es": "je ne dis pas"
    },
    {
      "en": "You say",
      "es": "tu dis"
    },
    {
      "en": "You do not say",
      "es": "tu ne dis pas"
    },
    {
      "en": "He say",
      "es": "il dit"
    },
    {
      "en": "He do not say",
      "es": "il ne dit pas"
    },
    {
      "en": "She say",
      "es": "nous disons"
    },
    {
      "en": "She do not say",
      "es": "nous ne disons pas"
    },
    {
      "en": "We say",
      "es": "vous dites"
    },
    {
      "en": "We do not say",
      "es": "vous ne dites pas"
    },
    {
      "en": "They say",
      "es": "ils disent"
    },
    {
      "en": "They do not say",
      "es": "ils ne disent pas"
    },
    {
      "en": "I write",
      "es": "je écris"
    },
    {
      "en": "I do not write",
      "es": "je ne écris pas"
    },
    {
      "en": "You write",
      "es": "tu écris"
    },
    {
      "en": "You do not write",
      "es": "tu ne écris pas"
    },
    {
      "en": "He write",
      "es": "il écrit"
    },
    {
      "en": "He do not write",
      "es": "il ne écrit pas"
    },
    {
      "en": "She write",
      "es": "nous écrivons"
    },
    {
      "en": "She do not write",
      "es": "nous ne écrivons pas"
    },
    {
      "en": "We write",
      "es": "vous écrivez"
    },
    {
      "en": "We do not write",
      "es": "vous ne écrivez pas"
    },
    {
      "en": "They write",
      "es": "ils écrivent"
    },
    {
      "en": "They do not write",
      "es": "ils ne écrivent pas"
    },
    {
      "en": "I read",
      "es": "je lis"
    },
    {
      "en": "I do not read",
      "es": "je ne lis pas"
    },
    {
      "en": "You read",
      "es": "tu lis"
    },
    {
      "en": "You do not read",
      "es": "tu ne lis pas"
    },
    {
      "en": "He read",
      "es": "il lit"
    },
    {
      "en": "He do not read",
      "es": "il ne lit pas"
    },
    {
      "en": "She read",
      "es": "nous lisons"
    },
    {
      "en": "She do not read",
      "es": "nous ne lisons pas"
    },
    {
      "en": "We read",
      "es": "vous lisez"
    },
    {
      "en": "We do not read",
      "es": "vous ne lisez pas"
    },
    {
      "en": "They read",
      "es": "ils lisent"
    },
    {
      "en": "They do not read",
      "es": "ils ne lisent pas"
    }
  ],
  "Past": [
    {
      "en": "I was",
      "es": "j'ai été"
    },
    {
      "en": "I did not was",
      "es": "j'ai ne été pas"
    },
    {
      "en": "You was",
      "es": "tu as été"
    },
    {
      "en": "You did not was",
      "es": "tu ne as été pas"
    },
    {
      "en": "He was",
      "es": "il a été"
    },
    {
      "en": "He did not was",
      "es": "il ne a été pas"
    },
    {
      "en": "She was",
      "es": "nous avons été"
    },
    {
      "en": "She did not was",
      "es": "nous ne avons été pas"
    },
    {
      "en": "We was",
      "es": "vous avez été"
    },
    {
      "en": "We did not was",
      "es": "vous ne avez été pas"
    },
    {
      "en": "They was",
      "es": "ils ont été"
    },
    {
      "en": "They did not was",
      "es": "ils ne ont été pas"
    },
    {
      "en": "I had",
      "es": "j'ai eu"
    },
    {
      "en": "I did not had",
      "es": "j'ai ne eu pas"
    },
    {
      "en": "You had",
      "es": "tu as eu"
    },
    {
      "en": "You did not had",
      "es": "tu ne as eu pas"
    },
    {
      "en": "He had",
      "es": "il a eu"
    },
    {
      "en": "He did not had",
      "es": "il ne a eu pas"
    },
    {
      "en": "She had",
      "es": "nous avons eu"
    },
    {
      "en": "She did not had",
      "es": "nous ne avons eu pas"
    },
    {
      "en": "We had",
      "es": "vous avez eu"
    },
    {
      "en": "We did not had",
      "es": "vous ne avez eu pas"
    },
    {
      "en": "They had",
      "es": "ils ont eu"
    },
    {
      "en": "They did not had",
      "es": "ils ne ont eu pas"
    },
    {
      "en": "I went",
      "es": "je suis allé"
    },
    {
      "en": "I did not went",
      "es": "je ne suis allé pas"
    },
    {
      "en": "You went",
      "es": "tu es allé"
    },
    {
      "en": "You did not went",
      "es": "tu ne es allé pas"
    },
    {
      "en": "He went",
      "es": "il est allé"
    },
    {
      "en": "He did not went",
      "es": "il ne est allé pas"
    },
    {
      "en": "She went",
      "es": "nous sommes allé"
    },
    {
      "en": "She did not went",
      "es": "nous ne sommes allé pas"
    },
    {
      "en": "We went",
      "es": "vous êtes allé"
    },
    {
      "en": "We did not went",
      "es": "vous ne êtes allé pas"
    },
    {
      "en": "They went",
      "es": "ils sont allé"
    },
    {
      "en": "They did not went",
      "es": "ils ne sont allé pas"
    },
    {
      "en": "I did",
      "es": "j'ai fait"
    },
    {
      "en": "I did not did",
      "es": "j'ai ne fait pas"
    },
    {
      "en": "You did",
      "es": "tu as fait"
    },
    {
      "en": "You did not did",
      "es": "tu ne as fait pas"
    },
    {
      "en": "He did",
      "es": "il a fait"
    },
    {
      "en": "He did not did",
      "es": "il ne a fait pas"
    },
    {
      "en": "She did",
      "es": "nous avons fait"
    },
    {
      "en": "She did not did",
      "es": "nous ne avons fait pas"
    },
    {
      "en": "We did",
      "es": "vous avez fait"
    },
    {
      "en": "We did not did",
      "es": "vous ne avez fait pas"
    },
    {
      "en": "They did",
      "es": "ils ont fait"
    },
    {
      "en": "They did not did",
      "es": "ils ne ont fait pas"
    },
    {
      "en": "I spoke",
      "es": "j'ai parlé"
    },
    {
      "en": "I did not spoke",
      "es": "j'ai ne parlé pas"
    },
    {
      "en": "You spoke",
      "es": "tu as parlé"
    },
    {
      "en": "You did not spoke",
      "es": "tu ne as parlé pas"
    },
    {
      "en": "He spoke",
      "es": "il a parlé"
    },
    {
      "en": "He did not spoke",
      "es": "il ne a parlé pas"
    },
    {
      "en": "She spoke",
      "es": "nous avons parlé"
    },
    {
      "en": "She did not spoke",
      "es": "nous ne avons parlé pas"
    },
    {
      "en": "We spoke",
      "es": "vous avez parlé"
    },
    {
      "en": "We did not spoke",
      "es": "vous ne avez parlé pas"
    },
    {
      "en": "They spoke",
      "es": "ils ont parlé"
    },
    {
      "en": "They did not spoke",
      "es": "ils ne ont parlé pas"
    },
    {
      "en": "I finished",
      "es": "j'ai fini"
    },
    {
      "en": "I did not finished",
      "es": "j'ai ne fini pas"
    },
    {
      "en": "You finished",
      "es": "tu as fini"
    },
    {
      "en": "You did not finished",
      "es": "tu ne as fini pas"
    },
    {
      "en": "He finished",
      "es": "il a fini"
    },
    {
      "en": "He did not finished",
      "es": "il ne a fini pas"
    },
    {
      "en": "She finished",
      "es": "nous avons fini"
    },
    {
      "en": "She did not finished",
      "es": "nous ne avons fini pas"
    },
    {
      "en": "We finished",
      "es": "vous avez fini"
    },
    {
      "en": "We did not finished",
      "es": "vous ne avez fini pas"
    },
    {
      "en": "They finished",
      "es": "ils ont fini"
    },
    {
      "en": "They did not finished",
      "es": "ils ne ont fini pas"
    },
    {
      "en": "I took",
      "es": "j'ai pris"
    },
    {
      "en": "I did not took",
      "es": "j'ai ne pris pas"
    },
    {
      "en": "You took",
      "es": "tu as pris"
    },
    {
      "en": "You did not took",
      "es": "tu ne as pris pas"
    },
    {
      "en": "He took",
      "es": "il a pris"
    },
    {
      "en": "He did not took",
      "es": "il ne a pris pas"
    },
    {
      "en": "She took",
      "es": "nous avons pris"
    },
    {
      "en": "She did not took",
      "es": "nous ne avons pris pas"
    },
    {
      "en": "We took",
      "es": "vous avez pris"
    },
    {
      "en": "We did not took",
      "es": "vous ne avez pris pas"
    },
    {
      "en": "They took",
      "es": "ils ont pris"
    },
    {
      "en": "They did not took",
      "es": "ils ne ont pris pas"
    },
    {
      "en": "I came",
      "es": "je suis venu"
    },
    {
      "en": "I did not came",
      "es": "je ne suis venu pas"
    },
    {
      "en": "You came",
      "es": "tu es venu"
    },
    {
      "en": "You did not came",
      "es": "tu ne es venu pas"
    },
    {
      "en": "He came",
      "es": "il est venu"
    },
    {
      "en": "He did not came",
      "es": "il ne est venu pas"
    },
    {
      "en": "She came",
      "es": "nous sommes venu"
    },
    {
      "en": "She did not came",
      "es": "nous ne sommes venu pas"
    },
    {
      "en": "We came",
      "es": "vous êtes venu"
    },
    {
      "en": "We did not came",
      "es": "vous ne êtes venu pas"
    },
    {
      "en": "They came",
      "es": "ils sont venu"
    },
    {
      "en": "They did not came",
      "es": "ils ne sont venu pas"
    },
    {
      "en": "I could",
      "es": "j'ai pu"
    },
    {
      "en": "I did not could",
      "es": "j'ai ne pu pas"
    },
    {
      "en": "You could",
      "es": "tu as pu"
    },
    {
      "en": "You did not could",
      "es": "tu ne as pu pas"
    },
    {
      "en": "He could",
      "es": "il a pu"
    },
    {
      "en": "He did not could",
      "es": "il ne a pu pas"
    },
    {
      "en": "She could",
      "es": "nous avons pu"
    },
    {
      "en": "She did not could",
      "es": "nous ne avons pu pas"
    },
    {
      "en": "We could",
      "es": "vous avez pu"
    },
    {
      "en": "We did not could",
      "es": "vous ne avez pu pas"
    },
    {
      "en": "They could",
      "es": "ils ont pu"
    },
    {
      "en": "They did not could",
      "es": "ils ne ont pu pas"
    },
    {
      "en": "I wanted",
      "es": "j'ai voulu"
    },
    {
      "en": "I did not wanted",
      "es": "j'ai ne voulu pas"
    },
    {
      "en": "You wanted",
      "es": "tu as voulu"
    },
    {
      "en": "You did not wanted",
      "es": "tu ne as voulu pas"
    },
    {
      "en": "He wanted",
      "es": "il a voulu"
    },
    {
      "en": "He did not wanted",
      "es": "il ne a voulu pas"
    },
    {
      "en": "She wanted",
      "es": "nous avons voulu"
    },
    {
      "en": "She did not wanted",
      "es": "nous ne avons voulu pas"
    },
    {
      "en": "We wanted",
      "es": "vous avez voulu"
    },
    {
      "en": "We did not wanted",
      "es": "vous ne avez voulu pas"
    },
    {
      "en": "They wanted",
      "es": "ils ont voulu"
    },
    {
      "en": "They did not wanted",
      "es": "ils ne ont voulu pas"
    },
    {
      "en": "I had to",
      "es": "j'ai dû"
    },
    {
      "en": "I did not to",
      "es": "j'ai ne dû pas"
    },
    {
      "en": "You had to",
      "es": "tu as dû"
    },
    {
      "en": "You did not to",
      "es": "tu ne as dû pas"
    },
    {
      "en": "He had to",
      "es": "il a dû"
    },
    {
      "en": "He did not to",
      "es": "il ne a dû pas"
    },
    {
      "en": "She had to",
      "es": "nous avons dû"
    },
    {
      "en": "She did not to",
      "es": "nous ne avons dû pas"
    },
    {
      "en": "We had to",
      "es": "vous avez dû"
    },
    {
      "en": "We did not to",
      "es": "vous ne avez dû pas"
    },
    {
      "en": "They had to",
      "es": "ils ont dû"
    },
    {
      "en": "They did not to",
      "es": "ils ne ont dû pas"
    },
    {
      "en": "I saw",
      "es": "j'ai vu"
    },
    {
      "en": "I did not saw",
      "es": "j'ai ne vu pas"
    },
    {
      "en": "You saw",
      "es": "tu as vu"
    },
    {
      "en": "You did not saw",
      "es": "tu ne as vu pas"
    },
    {
      "en": "He saw",
      "es": "il a vu"
    },
    {
      "en": "He did not saw",
      "es": "il ne a vu pas"
    },
    {
      "en": "She saw",
      "es": "nous avons vu"
    },
    {
      "en": "She did not saw",
      "es": "nous ne avons vu pas"
    },
    {
      "en": "We saw",
      "es": "vous avez vu"
    },
    {
      "en": "We did not saw",
      "es": "vous ne avez vu pas"
    },
    {
      "en": "They saw",
      "es": "ils ont vu"
    },
    {
      "en": "They did not saw",
      "es": "ils ne ont vu pas"
    },
    {
      "en": "I knew",
      "es": "j'ai su"
    },
    {
      "en": "I did not knew",
      "es": "j'ai ne su pas"
    },
    {
      "en": "You knew",
      "es": "tu as su"
    },
    {
      "en": "You did not knew",
      "es": "tu ne as su pas"
    },
    {
      "en": "He knew",
      "es": "il a su"
    },
    {
      "en": "He did not knew",
      "es": "il ne a su pas"
    },
    {
      "en": "She knew",
      "es": "nous avons su"
    },
    {
      "en": "She did not knew",
      "es": "nous ne avons su pas"
    },
    {
      "en": "We knew",
      "es": "vous avez su"
    },
    {
      "en": "We did not knew",
      "es": "vous ne avez su pas"
    },
    {
      "en": "They knew",
      "es": "ils ont su"
    },
    {
      "en": "They did not knew",
      "es": "ils ne ont su pas"
    },
    {
      "en": "I put",
      "es": "j'ai mis"
    },
    {
      "en": "I did not put",
      "es": "j'ai ne mis pas"
    },
    {
      "en": "You put",
      "es": "tu as mis"
    },
    {
      "en": "You did not put",
      "es": "tu ne as mis pas"
    },
    {
      "en": "He put",
      "es": "il a mis"
    },
    {
      "en": "He did not put",
      "es": "il ne a mis pas"
    },
    {
      "en": "She put",
      "es": "nous avons mis"
    },
    {
      "en": "She did not put",
      "es": "nous ne avons mis pas"
    },
    {
      "en": "We put",
      "es": "vous avez mis"
    },
    {
      "en": "We did not put",
      "es": "vous ne avez mis pas"
    },
    {
      "en": "They put",
      "es": "ils ont mis"
    },
    {
      "en": "They did not put",
      "es": "ils ne ont mis pas"
    },
    {
      "en": "I went out",
      "es": "je suis sorti"
    },
    {
      "en": "I did not out",
      "es": "je ne suis sorti pas"
    },
    {
      "en": "You went out",
      "es": "tu es sorti"
    },
    {
      "en": "You did not out",
      "es": "tu ne es sorti pas"
    },
    {
      "en": "He went out",
      "es": "il est sorti"
    },
    {
      "en": "He did not out",
      "es": "il ne est sorti pas"
    },
    {
      "en": "She went out",
      "es": "nous sommes sorti"
    },
    {
      "en": "She did not out",
      "es": "nous ne sommes sorti pas"
    },
    {
      "en": "We went out",
      "es": "vous êtes sorti"
    },
    {
      "en": "We did not out",
      "es": "vous ne êtes sorti pas"
    },
    {
      "en": "They went out",
      "es": "ils sont sorti"
    },
    {
      "en": "They did not out",
      "es": "ils ne sont sorti pas"
    },
    {
      "en": "I left",
      "es": "je suis parti"
    },
    {
      "en": "I did not left",
      "es": "je ne suis parti pas"
    },
    {
      "en": "You left",
      "es": "tu es parti"
    },
    {
      "en": "You did not left",
      "es": "tu ne es parti pas"
    },
    {
      "en": "He left",
      "es": "il est parti"
    },
    {
      "en": "He did not left",
      "es": "il ne est parti pas"
    },
    {
      "en": "She left",
      "es": "nous sommes parti"
    },
    {
      "en": "She did not left",
      "es": "nous ne sommes parti pas"
    },
    {
      "en": "We left",
      "es": "vous êtes parti"
    },
    {
      "en": "We did not left",
      "es": "vous ne êtes parti pas"
    },
    {
      "en": "They left",
      "es": "ils sont parti"
    },
    {
      "en": "They did not left",
      "es": "ils ne sont parti pas"
    },
    {
      "en": "I said",
      "es": "j'ai dit"
    },
    {
      "en": "I did not said",
      "es": "j'ai ne dit pas"
    },
    {
      "en": "You said",
      "es": "tu as dit"
    },
    {
      "en": "You did not said",
      "es": "tu ne as dit pas"
    },
    {
      "en": "He said",
      "es": "il a dit"
    },
    {
      "en": "He did not said",
      "es": "il ne a dit pas"
    },
    {
      "en": "She said",
      "es": "nous avons dit"
    },
    {
      "en": "She did not said",
      "es": "nous ne avons dit pas"
    },
    {
      "en": "We said",
      "es": "vous avez dit"
    },
    {
      "en": "We did not said",
      "es": "vous ne avez dit pas"
    },
    {
      "en": "They said",
      "es": "ils ont dit"
    },
    {
      "en": "They did not said",
      "es": "ils ne ont dit pas"
    },
    {
      "en": "I wrote",
      "es": "j'ai écrit"
    },
    {
      "en": "I did not wrote",
      "es": "j'ai ne écrit pas"
    },
    {
      "en": "You wrote",
      "es": "tu as écrit"
    },
    {
      "en": "You did not wrote",
      "es": "tu ne as écrit pas"
    },
    {
      "en": "He wrote",
      "es": "il a écrit"
    },
    {
      "en": "He did not wrote",
      "es": "il ne a écrit pas"
    },
    {
      "en": "She wrote",
      "es": "nous avons écrit"
    },
    {
      "en": "She did not wrote",
      "es": "nous ne avons écrit pas"
    },
    {
      "en": "We wrote",
      "es": "vous avez écrit"
    },
    {
      "en": "We did not wrote",
      "es": "vous ne avez écrit pas"
    },
    {
      "en": "They wrote",
      "es": "ils ont écrit"
    },
    {
      "en": "They did not wrote",
      "es": "ils ne ont écrit pas"
    },
    {
      "en": "I read",
      "es": "j'ai lu"
    },
    {
      "en": "I did not read",
      "es": "j'ai ne lu pas"
    },
    {
      "en": "You read",
      "es": "tu as lu"
    },
    {
      "en": "You did not read",
      "es": "tu ne as lu pas"
    },
    {
      "en": "He read",
      "es": "il a lu"
    },
    {
      "en": "He did not read",
      "es": "il ne a lu pas"
    },
    {
      "en": "She read",
      "es": "nous avons lu"
    },
    {
      "en": "She did not read",
      "es": "nous ne avons lu pas"
    },
    {
      "en": "We read",
      "es": "vous avez lu"
    },
    {
      "en": "We did not read",
      "es": "vous ne avez lu pas"
    },
    {
      "en": "They read",
      "es": "ils ont lu"
    },
    {
      "en": "They did not read",
      "es": "ils ne ont lu pas"
    }
  ],
  "Future": [
    {
      "en": "I will be",
      "es": "je serai"
    },
    {
      "en": "I will not be",
      "es": "je ne serai pas"
    },
    {
      "en": "You will be",
      "es": "tu seras"
    },
    {
      "en": "You will not be",
      "es": "tu ne seras pas"
    },
    {
      "en": "He will be",
      "es": "il sera"
    },
    {
      "en": "He will not be",
      "es": "il ne sera pas"
    },
    {
      "en": "She will be",
      "es": "nous serons"
    },
    {
      "en": "She will not be",
      "es": "nous ne serons pas"
    },
    {
      "en": "We will be",
      "es": "vous serez"
    },
    {
      "en": "We will not be",
      "es": "vous ne serez pas"
    },
    {
      "en": "They will be",
      "es": "ils seront"
    },
    {
      "en": "They will not be",
      "es": "ils ne seront pas"
    },
    {
      "en": "I will have",
      "es": "j'aurai"
    },
    {
      "en": "I will not have",
      "es": "ne j'aurai pas"
    },
    {
      "en": "You will have",
      "es": "tu auras"
    },
    {
      "en": "You will not have",
      "es": "tu ne auras pas"
    },
    {
      "en": "He will have",
      "es": "il aura"
    },
    {
      "en": "He will not have",
      "es": "il ne aura pas"
    },
    {
      "en": "She will have",
      "es": "nous aurons"
    },
    {
      "en": "She will not have",
      "es": "nous ne aurons pas"
    },
    {
      "en": "We will have",
      "es": "vous aurez"
    },
    {
      "en": "We will not have",
      "es": "vous ne aurez pas"
    },
    {
      "en": "They will have",
      "es": "ils auront"
    },
    {
      "en": "They will not have",
      "es": "ils ne auront pas"
    },
    {
      "en": "I will go",
      "es": "j'irai"
    },
    {
      "en": "I will not go",
      "es": "ne j'irai pas"
    },
    {
      "en": "You will go",
      "es": "tu iras"
    },
    {
      "en": "You will not go",
      "es": "tu ne iras pas"
    },
    {
      "en": "He will go",
      "es": "il ira"
    },
    {
      "en": "He will not go",
      "es": "il ne ira pas"
    },
    {
      "en": "She will go",
      "es": "nous irons"
    },
    {
      "en": "She will not go",
      "es": "nous ne irons pas"
    },
    {
      "en": "We will go",
      "es": "vous irez"
    },
    {
      "en": "We will not go",
      "es": "vous ne irez pas"
    },
    {
      "en": "They will go",
      "es": "ils iront"
    },
    {
      "en": "They will not go",
      "es": "ils ne iront pas"
    },
    {
      "en": "I will do",
      "es": "je ferai"
    },
    {
      "en": "I will not do",
      "es": "je ne ferai pas"
    },
    {
      "en": "You will do",
      "es": "tu feras"
    },
    {
      "en": "You will not do",
      "es": "tu ne feras pas"
    },
    {
      "en": "He will do",
      "es": "il fera"
    },
    {
      "en": "He will not do",
      "es": "il ne fera pas"
    },
    {
      "en": "She will do",
      "es": "nous ferons"
    },
    {
      "en": "She will not do",
      "es": "nous ne ferons pas"
    },
    {
      "en": "We will do",
      "es": "vous ferez"
    },
    {
      "en": "We will not do",
      "es": "vous ne ferez pas"
    },
    {
      "en": "They will do",
      "es": "ils feront"
    },
    {
      "en": "They will not do",
      "es": "ils ne feront pas"
    },
    {
      "en": "I will speak",
      "es": "je parlerai"
    },
    {
      "en": "I will not speak",
      "es": "je ne parlerai pas"
    },
    {
      "en": "You will speak",
      "es": "tu parleras"
    },
    {
      "en": "You will not speak",
      "es": "tu ne parleras pas"
    },
    {
      "en": "He will speak",
      "es": "il parlera"
    },
    {
      "en": "He will not speak",
      "es": "il ne parlera pas"
    },
    {
      "en": "She will speak",
      "es": "nous parlerons"
    },
    {
      "en": "She will not speak",
      "es": "nous ne parlerons pas"
    },
    {
      "en": "We will speak",
      "es": "vous parlerez"
    },
    {
      "en": "We will not speak",
      "es": "vous ne parlerez pas"
    },
    {
      "en": "They will speak",
      "es": "ils parleront"
    },
    {
      "en": "They will not speak",
      "es": "ils ne parleront pas"
    },
    {
      "en": "I will finish",
      "es": "je finirai"
    },
    {
      "en": "I will not finish",
      "es": "je ne finirai pas"
    },
    {
      "en": "You will finish",
      "es": "tu finiras"
    },
    {
      "en": "You will not finish",
      "es": "tu ne finiras pas"
    },
    {
      "en": "He will finish",
      "es": "il finira"
    },
    {
      "en": "He will not finish",
      "es": "il ne finira pas"
    },
    {
      "en": "She will finish",
      "es": "nous finirons"
    },
    {
      "en": "She will not finish",
      "es": "nous ne finirons pas"
    },
    {
      "en": "We will finish",
      "es": "vous finirez"
    },
    {
      "en": "We will not finish",
      "es": "vous ne finirez pas"
    },
    {
      "en": "They will finish",
      "es": "ils finiront"
    },
    {
      "en": "They will not finish",
      "es": "ils ne finiront pas"
    },
    {
      "en": "I will take",
      "es": "je prendrai"
    },
    {
      "en": "I will not take",
      "es": "je ne prendrai pas"
    },
    {
      "en": "You will take",
      "es": "tu prendras"
    },
    {
      "en": "You will not take",
      "es": "tu ne prendras pas"
    },
    {
      "en": "He will take",
      "es": "il prendra"
    },
    {
      "en": "He will not take",
      "es": "il ne prendra pas"
    },
    {
      "en": "She will take",
      "es": "nous prendrons"
    },
    {
      "en": "She will not take",
      "es": "nous ne prendrons pas"
    },
    {
      "en": "We will take",
      "es": "vous prendrez"
    },
    {
      "en": "We will not take",
      "es": "vous ne prendrez pas"
    },
    {
      "en": "They will take",
      "es": "ils prendront"
    },
    {
      "en": "They will not take",
      "es": "ils ne prendront pas"
    },
    {
      "en": "I will come",
      "es": "je viendrai"
    },
    {
      "en": "I will not come",
      "es": "je ne viendrai pas"
    },
    {
      "en": "You will come",
      "es": "tu viendras"
    },
    {
      "en": "You will not come",
      "es": "tu ne viendras pas"
    },
    {
      "en": "He will come",
      "es": "il viendra"
    },
    {
      "en": "He will not come",
      "es": "il ne viendra pas"
    },
    {
      "en": "She will come",
      "es": "nous viendrons"
    },
    {
      "en": "She will not come",
      "es": "nous ne viendrons pas"
    },
    {
      "en": "We will come",
      "es": "vous viendrez"
    },
    {
      "en": "We will not come",
      "es": "vous ne viendrez pas"
    },
    {
      "en": "They will come",
      "es": "ils viendront"
    },
    {
      "en": "They will not come",
      "es": "ils ne viendront pas"
    },
    {
      "en": "I will be able",
      "es": "je pourrai"
    },
    {
      "en": "I will not able",
      "es": "je ne pourrai pas"
    },
    {
      "en": "You will be able",
      "es": "tu pourras"
    },
    {
      "en": "You will not able",
      "es": "tu ne pourras pas"
    },
    {
      "en": "He will be able",
      "es": "il pourra"
    },
    {
      "en": "He will not able",
      "es": "il ne pourra pas"
    },
    {
      "en": "She will be able",
      "es": "nous pourrons"
    },
    {
      "en": "She will not able",
      "es": "nous ne pourrons pas"
    },
    {
      "en": "We will be able",
      "es": "vous pourrez"
    },
    {
      "en": "We will not able",
      "es": "vous ne pourrez pas"
    },
    {
      "en": "They will be able",
      "es": "ils pourront"
    },
    {
      "en": "They will not able",
      "es": "ils ne pourront pas"
    },
    {
      "en": "I will want",
      "es": "je voudrai"
    },
    {
      "en": "I will not want",
      "es": "je ne voudrai pas"
    },
    {
      "en": "You will want",
      "es": "tu voudras"
    },
    {
      "en": "You will not want",
      "es": "tu ne voudras pas"
    },
    {
      "en": "He will want",
      "es": "il voudra"
    },
    {
      "en": "He will not want",
      "es": "il ne voudra pas"
    },
    {
      "en": "She will want",
      "es": "nous voudrons"
    },
    {
      "en": "She will not want",
      "es": "nous ne voudrons pas"
    },
    {
      "en": "We will want",
      "es": "vous voudrez"
    },
    {
      "en": "We will not want",
      "es": "vous ne voudrez pas"
    },
    {
      "en": "They will want",
      "es": "ils voudront"
    },
    {
      "en": "They will not want",
      "es": "ils ne voudront pas"
    },
    {
      "en": "I will have to",
      "es": "je devrai"
    },
    {
      "en": "I will not to",
      "es": "je ne devrai pas"
    },
    {
      "en": "You will have to",
      "es": "tu devras"
    },
    {
      "en": "You will not to",
      "es": "tu ne devras pas"
    },
    {
      "en": "He will have to",
      "es": "il devra"
    },
    {
      "en": "He will not to",
      "es": "il ne devra pas"
    },
    {
      "en": "She will have to",
      "es": "nous devrons"
    },
    {
      "en": "She will not to",
      "es": "nous ne devrons pas"
    },
    {
      "en": "We will have to",
      "es": "vous devrez"
    },
    {
      "en": "We will not to",
      "es": "vous ne devrez pas"
    },
    {
      "en": "They will have to",
      "es": "ils devront"
    },
    {
      "en": "They will not to",
      "es": "ils ne devront pas"
    },
    {
      "en": "I will see",
      "es": "je verrai"
    },
    {
      "en": "I will not see",
      "es": "je ne verrai pas"
    },
    {
      "en": "You will see",
      "es": "tu verras"
    },
    {
      "en": "You will not see",
      "es": "tu ne verras pas"
    },
    {
      "en": "He will see",
      "es": "il verra"
    },
    {
      "en": "He will not see",
      "es": "il ne verra pas"
    },
    {
      "en": "She will see",
      "es": "nous verrons"
    },
    {
      "en": "She will not see",
      "es": "nous ne verrons pas"
    },
    {
      "en": "We will see",
      "es": "vous verrez"
    },
    {
      "en": "We will not see",
      "es": "vous ne verrez pas"
    },
    {
      "en": "They will see",
      "es": "ils verront"
    },
    {
      "en": "They will not see",
      "es": "ils ne verront pas"
    },
    {
      "en": "I will know",
      "es": "je saurai"
    },
    {
      "en": "I will not know",
      "es": "je ne saurai pas"
    },
    {
      "en": "You will know",
      "es": "tu sauras"
    },
    {
      "en": "You will not know",
      "es": "tu ne sauras pas"
    },
    {
      "en": "He will know",
      "es": "il saura"
    },
    {
      "en": "He will not know",
      "es": "il ne saura pas"
    },
    {
      "en": "She will know",
      "es": "nous saurons"
    },
    {
      "en": "She will not know",
      "es": "nous ne saurons pas"
    },
    {
      "en": "We will know",
      "es": "vous saurez"
    },
    {
      "en": "We will not know",
      "es": "vous ne saurez pas"
    },
    {
      "en": "They will know",
      "es": "ils sauront"
    },
    {
      "en": "They will not know",
      "es": "ils ne sauront pas"
    },
    {
      "en": "I will put",
      "es": "je mettrai"
    },
    {
      "en": "I will not put",
      "es": "je ne mettrai pas"
    },
    {
      "en": "You will put",
      "es": "tu mettras"
    },
    {
      "en": "You will not put",
      "es": "tu ne mettras pas"
    },
    {
      "en": "He will put",
      "es": "il mettra"
    },
    {
      "en": "He will not put",
      "es": "il ne mettra pas"
    },
    {
      "en": "She will put",
      "es": "nous mettrons"
    },
    {
      "en": "She will not put",
      "es": "nous ne mettrons pas"
    },
    {
      "en": "We will put",
      "es": "vous mettrez"
    },
    {
      "en": "We will not put",
      "es": "vous ne mettrez pas"
    },
    {
      "en": "They will put",
      "es": "ils mettront"
    },
    {
      "en": "They will not put",
      "es": "ils ne mettront pas"
    },
    {
      "en": "I will go out",
      "es": "je sortirai"
    },
    {
      "en": "I will not out",
      "es": "je ne sortirai pas"
    },
    {
      "en": "You will go out",
      "es": "tu sortiras"
    },
    {
      "en": "You will not out",
      "es": "tu ne sortiras pas"
    },
    {
      "en": "He will go out",
      "es": "il sortira"
    },
    {
      "en": "He will not out",
      "es": "il ne sortira pas"
    },
    {
      "en": "She will go out",
      "es": "nous sortirons"
    },
    {
      "en": "She will not out",
      "es": "nous ne sortirons pas"
    },
    {
      "en": "We will go out",
      "es": "vous sortirez"
    },
    {
      "en": "We will not out",
      "es": "vous ne sortirez pas"
    },
    {
      "en": "They will go out",
      "es": "ils sortiront"
    },
    {
      "en": "They will not out",
      "es": "ils ne sortiront pas"
    },
    {
      "en": "I will leave",
      "es": "je partirai"
    },
    {
      "en": "I will not leave",
      "es": "je ne partirai pas"
    },
    {
      "en": "You will leave",
      "es": "tu partiras"
    },
    {
      "en": "You will not leave",
      "es": "tu ne partiras pas"
    },
    {
      "en": "He will leave",
      "es": "il partira"
    },
    {
      "en": "He will not leave",
      "es": "il ne partira pas"
    },
    {
      "en": "She will leave",
      "es": "nous partirons"
    },
    {
      "en": "She will not leave",
      "es": "nous ne partirons pas"
    },
    {
      "en": "We will leave",
      "es": "vous partirez"
    },
    {
      "en": "We will not leave",
      "es": "vous ne partirez pas"
    },
    {
      "en": "They will leave",
      "es": "ils partiront"
    },
    {
      "en": "They will not leave",
      "es": "ils ne partiront pas"
    },
    {
      "en": "I will say",
      "es": "je dirai"
    },
    {
      "en": "I will not say",
      "es": "je ne dirai pas"
    },
    {
      "en": "You will say",
      "es": "tu diras"
    },
    {
      "en": "You will not say",
      "es": "tu ne diras pas"
    },
    {
      "en": "He will say",
      "es": "il dira"
    },
    {
      "en": "He will not say",
      "es": "il ne dira pas"
    },
    {
      "en": "She will say",
      "es": "nous dirons"
    },
    {
      "en": "She will not say",
      "es": "nous ne dirons pas"
    },
    {
      "en": "We will say",
      "es": "vous direz"
    },
    {
      "en": "We will not say",
      "es": "vous ne direz pas"
    },
    {
      "en": "They will say",
      "es": "ils diront"
    },
    {
      "en": "They will not say",
      "es": "ils ne diront pas"
    },
    {
      "en": "I will write",
      "es": "je écrirai"
    },
    {
      "en": "I will not write",
      "es": "je ne écrirai pas"
    },
    {
      "en": "You will write",
      "es": "tu écriras"
    },
    {
      "en": "You will not write",
      "es": "tu ne écriras pas"
    },
    {
      "en": "He will write",
      "es": "il écrira"
    },
    {
      "en": "He will not write",
      "es": "il ne écrira pas"
    },
    {
      "en": "She will write",
      "es": "nous écrirons"
    },
    {
      "en": "She will not write",
      "es": "nous ne écrirons pas"
    },
    {
      "en": "We will write",
      "es": "vous écrirez"
    },
    {
      "en": "We will not write",
      "es": "vous ne écrirez pas"
    },
    {
      "en": "They will write",
      "es": "ils écriront"
    },
    {
      "en": "They will not write",
      "es": "ils ne écriront pas"
    },
    {
      "en": "I will read",
      "es": "je lirai"
    },
    {
      "en": "I will not read",
      "es": "je ne lirai pas"
    },
    {
      "en": "You will read",
      "es": "tu liras"
    },
    {
      "en": "You will not read",
      "es": "tu ne liras pas"
    },
    {
      "en": "He will read",
      "es": "il lira"
    },
    {
      "en": "He will not read",
      "es": "il ne lira pas"
    },
    {
      "en": "She will read",
      "es": "nous lirons"
    },
    {
      "en": "She will not read",
      "es": "nous ne lirons pas"
    },
    {
      "en": "We will read",
      "es": "vous lirez"
    },
    {
      "en": "We will not read",
      "es": "vous ne lirez pas"
    },
    {
      "en": "They will read",
      "es": "ils liront"
    },
    {
      "en": "They will not read",
      "es": "ils ne liront pas"
    }
  ]
};
};

let currentTense = "Present";
let currentLevel = 1;
let unlockedLevels = { Present: 1, Past: 1, Future: 1 };
let gameVerbs = [];
let startTime, timerInterval;

const tenseButtons = document.querySelectorAll(".tense-button");
const levelList = document.getElementById("level-list");
const gameContainer = document.getElementById("game");
const questionsContainer = document.getElementById("questions");
const resultsContainer = document.getElementById("results");

// ✅ TENSE BUTTONS now WORK
tenseButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    tenseButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    currentTense = btn.dataset.tense;
    renderLevels();
  });
});

// ✅ RENDER LEVELS INITIALLY
renderLevels();

function renderLevels() {
  levelList.style.display = "flex";
  gameContainer.style.display = "none";
  levelList.innerHTML = "";

  for (let i = 1; i <= 10; i++) {
    const button = document.createElement("button");
    const bestTimeKey = `bestTime_${currentTense}_Level${i}`;
    const bestTime = localStorage.getItem(bestTimeKey);
    const locked = i > unlockedLevels[currentTense];

    button.textContent = locked ? `Level ${i} 🔒` : `Level ${i}${bestTime ? ` - Best: ${bestTime}s` : ""}`;
    button.disabled = locked;

    button.addEventListener("click", () => {
      startGame(i);
    });

    levelList.appendChild(button);
  }
}

function startGame(level) {
  currentLevel = level;
  gameVerbs = shuffleArray(VERB_SETS[currentTense]).slice(0, 10);
  levelList.style.display = "none";
  gameContainer.style.display = "block";
  questionsContainer.innerHTML = "";
  resultsContainer.innerHTML = "";

  gameVerbs.forEach(verb => {
    const div = document.createElement("div");
    div.innerHTML = `<strong>${verb.en}</strong>: <input type="text" data-answer="${verb.es}">`;
    questionsContainer.appendChild(div);
  });

  startTimer();
}

function shuffleArray(array) {
  return array.sort(() => Math.random() - 0.5);
}

function startTimer() {
  startTime = Date.now();
  timerInterval = setInterval(() => {
    const elapsed = Math.floor((Date.now() - startTime) / 1000);
    document.getElementById("timer").textContent = `Time: ${elapsed}s`;
  }, 1000);
}

function stopTimer() {
  clearInterval(timerInterval);
}

document.getElementById("submit").addEventListener("click", () => {
  stopTimer();
  const elapsed = Math.floor((Date.now() - startTime) / 1000);

  let penalty = 0;
  let correct = 0;

  document.querySelectorAll("#questions input").forEach(input => {
    if (input.value.trim().toLowerCase() === input.dataset.answer) {
      correct++;
      input.style.border = "2px solid green";
    } else {
      penalty += 30;
      input.style.border = "2px solid red";
    }
  });

  const totalTime = elapsed + penalty;
  resultsContainer.innerHTML = `<h3>Game Over!</h3><p>Correct: ${correct}/10</p><p>Time: ${elapsed}s + Penalty: ${penalty}s = <strong>${totalTime}s</strong></p><h4>Feedback:</h4>`;

  document.querySelectorAll("#questions input").forEach(input => {
    const correctAnswer = input.dataset.answer;
    const userAnswer = input.value.trim();
    if (userAnswer.toLowerCase() !== correctAnswer) {
      const feedback = document.createElement("p");
      feedback.innerHTML = `<strong>${input.previousSibling.textContent}</strong> → Correct answer: <span style='color: green;'>${correctAnswer}</span> | Your answer: <span style='color: red;'>${userAnswer || "(blank)"}</span>`;
      resultsContainer.appendChild(feedback);
    }
  });

  const bestTimeKey = `bestTime_${currentTense}_Level${currentLevel}`;
  const savedBestTime = localStorage.getItem(bestTimeKey);
  if (!savedBestTime || totalTime < parseInt(savedBestTime)) {
    localStorage.setItem(bestTimeKey, totalTime);
  }

  if (totalTime <= levelUnlockTime(currentLevel)) {
    if (unlockedLevels[currentTense] < currentLevel + 1) {
      unlockedLevels[currentTense] = currentLevel + 1;
      const unlockMsg = document.createElement("p");
      unlockMsg.style.color = "blue";
      unlockMsg.innerHTML = `<strong>Level ${currentLevel + 1} Unlocked!</strong>`;
      resultsContainer.appendChild(unlockMsg);
    }
  }

  if (correct === 10) {
    const celebration = document.createElement("div");
    celebration.className = "perfect-celebration";
    celebration.textContent = "🎉 PERFECT GAME! 🎉";
    resultsContainer.prepend(celebration);

    setTimeout(() => {
      celebration.remove();
    }, 5000);
  }

  const tryAgainButton = document.createElement("button");
  tryAgainButton.textContent = "Try Again";
  tryAgainButton.className = "try-again";
  tryAgainButton.onclick = () => {
    startGame(currentLevel);
  };
  resultsContainer.appendChild(tryAgainButton);

  const backButton = document.createElement("button");
  backButton.textContent = "Back to Levels";
  backButton.id = "back-button";
  backButton.onclick = () => {
    renderLevels();
  };
  resultsContainer.appendChild(backButton);
});

function levelUnlockTime(level) {
  return 100 - (level - 1) * 5;
}