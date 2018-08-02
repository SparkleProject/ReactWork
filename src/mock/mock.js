// this is a mock for back end request
export const MockUsers = ([
  { username: 'Eric', password:'000000'},
  { username: 'Tomy',  password:'000000'},
  { username: 'Lily',  password:'000000'},
  { username: 'Lucy',  password:'000000'}
])

export const MockMenuOption = (['BUSINESS','SPORT','SCIENCE','TECH','ENT'])

export const MockSourceAPI = (
  {
    apiUrl: "https://newsapi.org/v2/top-headlines",
    apiKey: "8387e17c44564618a759c1f63fed10fb"
  }
)

export const MockCategoryMapping = (
  {
    BUSINESS:['business-insider','business-insider-uk','financial-times','financial-post'],
    SPORT: ['bbc-sport','fox-sports','talksport','the-sport-bible']
  }
)
