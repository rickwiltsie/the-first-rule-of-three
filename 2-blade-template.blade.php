<div class="flex flex-col" x-data="productHierarchyManagement({{ $childrenProducts }})">
   <x-table>
       <x-slot:head>
           <x-table.row x-bind:class="showDragId == -1 ? 'border-purple-100 border-b-50' : ''"
               x-on:drop.prevent="endDrag(event, -1)"
               x-on:dragover.prevent="showDrag(event, -1)"
               x-on:dragleave.prevent="hideDrag(event, -1)"
           >
               <!-- Header Row -->
           </x-table.row>
       </x-slot:head>
       <template x-for="(childProduct, index) in (currentChildren? currentChildren: [])" :key="index">
           <x-table.row draggable="true"
               class="border-gray-200 border-b"
               x-bind:class="showDragId == childProduct.id ? 'border-purple-100 border-b-50' : ''"
               x-on:dragstart.self="startDrag(event, childProduct.id)"
               x-on:drop.prevent="endDrag(event, childProduct.id)"
               x-on:dragover.prevent="showDrag(event, childProduct.id)"
               x-on:dragleave.prevent="hideDrag(event, childProduct.id)"
           >
               <!-- Row Content -->
           </x-table.row>
       </template>
   </x-table>
</div>
