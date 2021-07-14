<template>
  <div id="people">
  <v-client-table v-model="companies" :columns="columns" />
</div>
</template>

<script>
import axios from 'axios'
export default {
 data(){
            return{
                columns: [ 'Name', 'Roll','Flat','Money'],
                data: [],
                companies: [],
                sortBy: 'Name',
                sortDirection: 'DESC',
                search: '',
            }
            
        },
  methods:{
    /*
  Re-sorts the cafes by what was selected.
*/
resortCafes(  ){
  /*
    Checks to see if what the user selected to sort by
    is the same as it's been. If it is, then we toggle the
    direction.
  */
  // if( by == this.sortBy ){
  //   if( this.sortDirection == 'ASC' ){
  //     this.sortDirection = 'DESC';
  //   }else{
  //     this.sortDirection = 'ASC';
  //   }
  // }

  /*
    If the sort by is different we set the sort by to what the
    user selected and defualt the direction to 'ASC'
  */
  // if( by != this.sortBy ){
  //   this.sortDirection = 'ASC';
  //   this.sortBy = by;
  // }

  /*
    Switch by what the sort by is set to, and run the method
    to sort by that column.
  */
  switch( this.sortBy ){
    case 'Name':
      this.sortCompaniesByName();
    break;
    case 'Roll':
      this.sortCompaniesByRoll();
    break;
    case 'Flat':
      this.sortCompaniesByFlat();
    break;
    case 'Money':
      this.sortCompaniesByMoney();
    break;
  }
},

  sortCompaniesByName(){
  this.companies.sort( function( a, b ){
    if( this.sortDirection == 'ASC' ){
      return ( ( a.Name == b.Name ) ? 0 : ( ( a.Name > b.Name ) ? 1 : -1 ) );
    }

    if( this.sortDirection == 'DESC' ){
      return ( ( a.name == b.Name ) ? 0 : ( ( a.Name < b.Name ) ? 1 : -1 ) );
    }
  }.bind(this));
},

  sortCompaniesByRoll(){
  this.companies.sort( function( a, b ){
    if( this.sortDirection == 'ASC' ){
      return parseInt( a.Roll ) < parseInt( b.Roll ) ? 1 : -1;
    }

    if( this.sortDirection == 'DESC' ){
      return parseInt( a.Roll ) > parseInt( b.Roll ) ? 1 : -1;
    }
  }.bind(this));
},

/*
  Sorts the companies by pending actions.
*/
sortCompaniesByFlat(){
  this.companies.sort( function( a, b ){
    if( this.sortDirection == 'ASC' ){
      return parseInt( a.Flat ) < parseInt( b.Flat ) ? 1 : -1;
    }

    if( this.sortDirection == 'DESC' ){
      return parseInt( a.Flat ) > parseInt( b.Flat ) ? 1 : -1;
    }
  }.bind(this));
},
sortCompaniesByMoney(){
  this.companies.sort( function( a, b ){
    if( this.sortDirection == 'ASC' ){
      return parseInt( a.Money ) < parseInt( b.Money ) ? 1 : -1;
    }

    if( this.sortDirection == 'DESC' ){
      return parseInt( a.Money ) > parseInt( b.Money ) ? 1 : -1;
    }
  }.bind(this));
},


  },
        async mounted() {
    // this.$refs.myTable.setLoadingState(true);
    const {data} = await axios.get('https://5837ea57-1bef-4f4b-b85b-b1e827c002b5.mock.pstmn.io/');
    this.data = data;
    this.companies = data;
    this.sortBy = this.$route.query.sortBy;
    this.resortCafes();
    // console.log(this.data);
    // this.sortCompaniesByName();
    // console.log(this.$route.query.sortBy);
    // console.log(this.companies);
    // this.$refs.myTable.setLoadingState(false);

}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
