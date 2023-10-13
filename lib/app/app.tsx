import { NavigationContainer } from '@react-navigation/native'
import { Stack } from './navigation /navigators'
import { listRoutes } from './navigation /list_routes'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from '../core/api/query_client'

export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{ headerShown: false }}>
          {listRoutes.map((route) => {
            return (
              <Stack.Screen
                name={route.routeName}
                component={route.component}
                key={route.routeName}
              />
            )
          })}
        </Stack.Navigator>
      </NavigationContainer>
    </QueryClientProvider>
  )
}
