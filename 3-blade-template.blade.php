<div x-data="dragDrop({
    onDropCallback: (dragEl, endDragEl, containerEl, hoverTopHalf) => { ... }
})">
    <div x-bind="dropContainer()" data-drag-col="1">
        @foreach($userWidgets->where('column', 1) as $widget)
            <div x-bind="dragWrapper()" data-drag-id="{{ $config['id']  }}">
                <h3>{{ $config['title'] }}</h3>
                <div x-bind="dragHandle()">
                    <x-heroicon-s-arrows-expand class="h-4 w-4" />
                </div>
                <!-- Widget Content -->
            </div>
        @endforeach
    </div>
    <!-- More Containers -->
</div>
