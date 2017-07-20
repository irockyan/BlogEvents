var menu = {
    currentState: 'hide',
    initialize: function () {
        let self = this
        self.on('hover', self.transition)
    },
    transition: function (evt) {
        switch (this.currentState) {
            case 'hide':
                this.currentState = 'show'
                break
            case 'show':
                this.currentState = 'hide'
                break
            default:
                break
        }
    }
}