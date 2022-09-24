```html
<div x-data
  x-on:drop.prevent="event.dataTransfer.getData('documentUuid') != '' ? $wire.rowDrop(event.dataTransfer.getData('documentUuid')) : ''"
  x-on:dragover.prevent=""
  x-on:dragleave.prevent="">
  <div>
      <table>
        @foreach($documents as $document)
            <tr id="document-{{ $document->uuid }}"
            class="{{ array_search($document->uuid, $selectedDocumentUuids) !== false || $viewingDocumentUuid == $document->uuid ? 'bg-hoverBg' : '' }}"
            x-on:dragstart.self="event.dataTransfer.setData('documentUuid', '{{ $document->uuid }}')"
            draggable="{{ $dragFrom ? 'true' : 'false' }}">
              <!-- Row Content -->
            </tr>
        @endforeach
      </table>
  </div>
</div>
```
