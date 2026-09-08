// import React from 'react';
// import {
//   Text,
//   View,
//   StyleSheet,
//   FlatList,
// } from 'react-native';

// const products = [
//   { id: '1', name: 'T-Shirt', price: 1500 },
//   { id: '2', name: 'Jeans', price: 3000 },
//   { id: '3', name: 'Shoes', price: 5000 },
//   { id: '4', name: 'Watch', price: 4000 },
// ];

// export default function HomeScreen({ navigation }) {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Shop App 🚀</Text>
//       <Text style={styles.subtitle}>Choose your products</Text>

//       <FlatList
//         data={products}
//         keyExtractor={(item) => item.id}
//         renderItem={({ item }) => (
//           <View style={styles.product}>
//             <Text style={styles.productName}>{item.name}</Text>
//             <Text style={styles.price}>Rs. {item.price}</Text>
//           </View>
//         )}
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#0933b9',
//     padding: 20,
//   },
//   title: {
//     fontSize: 28,
//     fontWeight: 'bold',
//     color: '#fff',
//     textAlign: 'center',
//     marginTop: 40,
//   },
//   subtitle: {
//     fontSize: 18,
//     color: '#62fd08',
//     textAlign: 'center',
//     marginTop: 10,
//     marginBottom: 20,
//   },
//   product: {
//     backgroundColor: '#fff',
//     padding: 20,
//     marginBottom: 15,
//     borderRadius: 10,
//   },
//   productName: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     color: '#222',
//   },
//   price: {
//     fontSize: 17,
//     color: '#0933b9',
//     marginTop: 8,
//   },
// });