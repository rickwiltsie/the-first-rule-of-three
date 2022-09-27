export default (config) => ({

    config: {
        onDropCallback: null,
    },

    dragEl: null, // the dragged element
    dragTargetEl: null, // the target that is currently dragged over
    hoverTopHalf: null, // if the mouse is hovering over the top half of the drag target
    containerEl: null, // the container that is currently dragged over
    handleSelected: false, // if the drag handle is held

    init() {
        this.config = {
            ...this.config,
            ...config,
        }
    },

    // x-bind
    dropContainer() {
        return {
            ['x-on:drop.stop.prevent'](event) {
                this.endDrag(event, null, this.$el)
            },
            ['x-on:dragover.stop.prevent'](event) {
                this.showContainerPreview(event, this.$el);
            },
            ['x-on:dragleave.stop.prevent'](event) {
                this.containerEl = null;
            }
        }
    },

    // x-bind
    dragHandle() {
        return {
            ['x-on:mousedown']() {
                this.dragHandleDown();
            },
        }
    },

    // x-bind
    dragWrapper() {
        return {
            [':draggable']() {
                return 'true';
            },
            ['x-on:dragstart.self'](event) {
                this.startDrag(event, this.$el);
            },
            ['x-on:drop.stop.prevent'](event) {
                this.endDrag(event, this.$el);
            },
            ['x-on:dragover.stop.prevent'](event) {
                this.showWrapperPreview(event, this.$el);
            },
            ['x-on:dragleave.stop.prevent'](event) {
                this.hideDrag(event, this.$el);
            },
        }
    },

    resetDrag() {
        this.dragEl = null;
        this.dragTargetEl = null;
        this.hoverTopHalf = null;
        this.containerEl = null;
        this.handleSelected = false;
    },

    dragHandleDown() {
        this.handleSelected = true;
    },

    startDrag(event, startEl) {
        if (!this.handleSelected) {
            event.preventDefault();
            return;
        }

        this.resetDrag();

        this.dragEl = startEl;
    },

    endDrag(event, endEl, containerEl = null) {
        if (endEl !== this.dragEl) {
            this.saveDrag(endEl, containerEl);
        }

        this.resetDrag();
    },

    showWrapperPreview(event, dragTargetEl) {

        // determine hover position
        let mouseY = event.clientY;
        let top = dragTargetEl.getBoundingClientRect().top;
        let middle = top + dragTargetEl.getBoundingClientRect().height / 2;

        let hoverTopHalf = null;
        if (mouseY > top && mouseY < middle) {
            hoverTopHalf = true;
        } else {
            hoverTopHalf = false;
        }

        if (this.dragTargetEl != dragTargetEl || this.hoverTopHalf != hoverTopHalf) {
            this.dragTargetEl = dragTargetEl;
            this.hoverTopHalf = hoverTopHalf;

            if (hoverTopHalf) {
                this.dragTargetEl.before(this.dragEl);
            } else {
                this.dragTargetEl.after(this.dragEl);
            }
        }
    },

    showContainerPreview(event, containerEl) {
        this.containerEl = containerEl;

        if (this.containerEl.childElementCount === 0) {
            this.containerEl.append(this.dragEl);
        }
    },

    hideDrag(event, hideEl) {
        if (this.dragTargetEl === hideEl) {
            this.dragTargetEl = null;
        }
    },

    saveDrag(endDragEl, containerEl) {
        if (this.config.onDropCallback !== null) {
            this.config.onDropCallback(this.dragEl, endDragEl, containerEl, this.hoverTopHalf);
        }
    },
})
