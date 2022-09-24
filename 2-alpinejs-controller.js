/* Exported as productHierarchyManageMent */
export default () => ({
   startDragId: null,
   showDragId: null,
   handleSelected: false,
   resetDrag() {
       this.startDragId = null;
       this.showDragId = null;
       this.handleSelected = false;
   },
   startDrag(event, startId) {
       if (!this.handleSelected) {
           event.preventDefault();
       }
       this.resetDrag();
       this.startDragId = startId;
   },
   endDrag(event, endId) {
       if (endId !== this.startDragId) {
           /* Application specific saveDrag method */
       }
       this.resetDrag();
   },
   showDrag(event, showId) {
       this.showDragId = showId;
   },
   hideDrag(event, hideId) {
       if (this.showDragId === hideId) {
           this.showDragId = null;
       }
   },
   dragHandleDown() {
       this.handleSelected = true;
   },
})
