import {http, HttpResponse} from 'msw'

export const handlers = [
    http.get('https://localmock.com/api/user', ({ request }) => {
        console.log('Request:', request.body);
        return HttpResponse.json({
            id: 1,
            name: 'John Doe',
          })
      }
    ),
]
