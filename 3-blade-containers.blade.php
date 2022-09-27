<div x-data="dragDrop(dragDropConfig)" class="grid grid-cols-2">
    <div x-bind="dropContainer()" class="col-span-1"  data-drag-col="1">
        @foreach($userWidgets->where('column', 1)->sortBy('order') as $widget)
            @widget($widget->class, $widget->config)
        @endforeach
    </div>
    <div x-bind="dropContainer()" class="col-span-1"  data-drag-col="2">
        @foreach($userWidgets->where('column', 2)->sortBy('order') as $widget)
            @widget($widget->class, $widget->config)
        @endforeach
    </div>
</div>
<script>
    const dragDropConfig = {
        onDropCallback: (dragEl, endDragEl, containerEl, hoverTopHalf) => {
            /* dragEl.dataset.dragId */
            axios({ ... })
        }
    }
</script>
