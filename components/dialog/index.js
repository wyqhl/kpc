import template from './index.vdt';

export default class extends Intact {
    get template() { return template }

    defaults() {
        return {
            title: '提示'
        }
    }
}
