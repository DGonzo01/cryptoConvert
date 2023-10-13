import { ConvertScreen } from '../../features/convert/screens/convert_screen'
import { RoutesName } from './routes_name'

interface IRouteItem {
  routeName: keyof typeof RoutesName
  component: () => React.JSX.Element
}

export const listRoutes: IRouteItem[] = [
  {
    routeName: RoutesName.convert,
    component: ConvertScreen
  }
]
