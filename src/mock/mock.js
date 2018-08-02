// this is a mock for back end request
export const MockUsers = ([
  { userid:'1',username: 'Eric', password:'000000'},
  { userid:'2',username: 'Tomy',  password:'000000'},
  { userid:'3',username: 'Lily',  password:'000000'},
  { userid:'4',username: 'Lucy',  password:'000000'}
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
