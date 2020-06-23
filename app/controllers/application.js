import Controller from '@ember/controller'
import { computed } from '@ember/object'
import _ from 'lodash'

export default Controller.extend({
  appName: 'Ember Twiddle',
  rowsCount: 300,
  columnsCount: 20,
  shouldRenderItems: false,
  items: computed('rowsCount','columnsCount', function(){
    return _.map(_.range(0, this.rowsCount) , (rowIndex) => {
       return _.map(_.range(0, this.columnsCount),(columnIndex) => {
            return rowIndex * this.columnsCount + columnIndex;
        });
    });
  }),
});
