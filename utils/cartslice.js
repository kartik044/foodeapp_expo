// import { createSlice } from "@reduxjs/toolkit";

 
   




import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
    Totalprice: 0,
    searchtext: []
  },
  reducers: {
    addItem: (state, action) => {
      const existingItem = state.cartItems.find(item => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.cartItems.push({ ...action.payload, quantity: 1 });
      }
    },
    increaseQuantity: (state, action) => {
      const existingItem = state.cartItems.find(item => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity++;
      }
    },
    decrementItem: (state, action) => {
      const existingItem = state.cartItems.find(item => item.id === action.payload.id);
      if (existingItem && existingItem.quantity > 1) {
        existingItem.quantity--;
      }
    },
    clearCart: (state) => {
      state.cartItems = [];
      state.Totalprice = 0;
    },
    calculateTotalPrice: (state) => {
      state.Totalprice = state.cartItems.reduce((total, item) => {
        return total + (item.price/100 * item.quantity); // Assuming price is not in cents
      }, 0);
    },
  },
});

export const {
  addItem,
  increaseQuantity,
  decrementItem,
  clearCart,
  calculateTotalPrice,
} = cartSlice.actions;

export default cartSlice.reducer;



//    const cartSlice = createSlice({
//     name: "cart", 
//      initialState :{
//         cartItems: [],
//         Totalprice:[], // Example initial state for the "cart" slice
//         // ... other properties
//         searchtext:[]
//       },
//     reducers:{
//         addItem:(state=[],action)=>{
           
//             state.cartItems.push(action.payload )
//         },
//         clearCart:(state,action)=>{
//               state.cartItems=[]
//         },
//         removeItem:(state,action)=>{
//             let newcart=[...state.cartItems]
//             let itemindex=state.item.findIndex(item=>item.id==action.payload.id)
//             if(itemindex>=0){
//                 newcart.splice(itemindex,1)
//             }else{
//                 console.log("can't remove the item that is not added to cart")
//             }state.cartItems=newcart
//           state.cartItems=state.cartItems.filter((i)=>i.id!==action.payload)
//         }, 
//         Subtotal:(state)=>{
//             let sum=0;
//             state.cartItems.forEach((i)  => sum +=i.price/100 ? i.price/100 :i.defaultrice/100 )
//             state.Totalprice=sum
//         },
        
        
//     }
//    })  
//         export const {addItem,clearCart,removeItem,Subtotal,search}= cartSlice.actions

//       export default cartSlice.reducer