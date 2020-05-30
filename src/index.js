import Button from './components/Button/button.vue'
import ButtonGroup from './components/Button/button-group.vue'
import Icon from './components/icon.vue'
import Row from './components/grid/Row'
import Col from "./components/grid/Col";
import NoticePlugin from "./components/notice/NoticePlugin";
import Popover from "./components/Popover/Popover";


const components = [
    Button,
    ButtonGroup,
    Icon,
    Row,
    Col,
    Popover
]
const install = function (Vue) {
    components.forEach(component => {
        Vue.component(component.name,component)
    })
    Vue.use(NoticePlugin)

}
export default {
    install,
    Button,
    ButtonGroup,
    Icon,
    Row,
    Col,
    NoticePlugin,
    Popover
}