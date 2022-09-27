<?php

namespace App\Http\Livewire;

...

class DocumentsTable extends Component
{
    public $dragFrom = false;

    public $dragTo = false;

    ...

    public function rowDrop($documentUuid)
    {
        $document = Document::where('uuid', $documentUuid)->first();

        if ($this->documents->contains($document)) {
            return;
        }

        $this->documents->push($document);
        $this->newDocumentUuids[] = $documentUuid;
    }
}
