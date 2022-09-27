<divx-bind="dragWrapper()" data-drag-id="{{ $config['id']  }}">
    <h3>
        {{ $config['title'] }}
    </h3>
    <div class="cursor-move" x-bind="dragHandle()">
        <x-heroicon-s-arrows-expand class="h-4 w-4" />
    </div>
    <!-- Widget Content -->
</div>
