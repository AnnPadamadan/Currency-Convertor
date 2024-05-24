import * as React from 'react';
import { Text, SafeAreaView, StyleSheet, TouchableOpacity, View, TextInput, Alert } from 'react-native';
const currencyPerDollar = {
  POUND: 0.78,
  EURO: 0.92,
  YEN: 156.93,
  AUSDOLLAR: 1.51,
  CANDOLLAR: 1.37,
  DINAR: 1309,
  RUPEE: 83.03,
  MEXPESO: 16.69,
  ARGPESO: 890.50,
};

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      resultValue: 0.0,
    };
  }

buttonPressed=currency=>{
  if(this.state.inputValue===""){
    Alert.alert("Field Empty");
  }else{
    let result=parseFloat(this.state.inputValue)*currencyPerDollar[currency]
    this.setState({resultValue:result.toFixed(2)})
  }


  
}

  render() {
    return (
      <SafeAreaView style={styles.container}>

      <View style={styles.screenView}>

      <View style={styles.resultContainer}>

<Text style={{textAlign:'center', fontSize:"30px", marginBottom:"70px"}}>Currency Calculator</Text>
      <Text style={styles.resultValue}>
      {this.state.resultValue}
      </Text>

      </View>

      <View style={styles.inputContainer}>
      <TextInput
      style={styles.input}
      selectionColor="blue"
      keyboardType="numeric"
      textAlign="center"
      placeholder="Enter value in USD"
      value={this.state.inputValue}
      onChangeText={inputValue=>this.setState({inputValue})}
      >
      
      </TextInput>
</View>





        <View style={styles.converterButtonContainer}>
        <TouchableOpacity
        onPress={()=>this.buttonPressed("POUND")}
        style={styles.converterButton}
        >
      <Text style={styles.converterButtonText}>Pound</Text>
        
        </TouchableOpacity>

      <TouchableOpacity
        onPress={()=>this.buttonPressed("EURO")}
        style={styles.converterButton}
        >
      <Text style={styles.converterButtonText}>Euro</Text>
        
        </TouchableOpacity>

        <TouchableOpacity
        onPress={()=>this.buttonPressed("YEN")}
        style={styles.converterButton}
        >
      <Text style={styles.converterButtonText}>Yen</Text>
        
        </TouchableOpacity>

        <TouchableOpacity
        onPress={()=>this.buttonPressed("AUSDOLLAR")}
        style={styles.converterButton}
        >
      <Text style={styles.converterButtonText}>Aus. Dollar</Text>

        </TouchableOpacity>
        
      <TouchableOpacity
        onPress={()=>this.buttonPressed("CANDOLLAR")}
        style={styles.converterButton}
        >
      <Text style={styles.converterButtonText}>Can. Dollar</Text>
 </TouchableOpacity>
      <TouchableOpacity
        onPress={()=>this.buttonPressed("DINAR")}
        style={styles.converterButton}
        >
      <Text style={styles.converterButtonText}>Dinar</Text>

        </TouchableOpacity>
      <TouchableOpacity
        onPress={()=>this.buttonPressed("RUPEE")}
        style={styles.converterButton}
        >
      <Text style={styles.converterButtonText}>Rupee</Text>
</TouchableOpacity>
      <TouchableOpacity
        onPress={()=>this.buttonPressed("MEXPESO")}
        style={styles.converterButton}
        >
      <Text style={styles.converterButtonText}>Mex. Peso</Text>
 </TouchableOpacity>
      <TouchableOpacity
        onPress={()=>this.buttonPressed("ARGPESO")}
        style={styles.converterButton}
        >
      <Text style={styles.converterButtonText}>Arg. Peso</Text>
        
       
        </TouchableOpacity>
        </View>
      </View>
    

        
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    //paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  converterButtonText: {
    margin: 15,
    fontSize: 18,
    color:"white",
    //fontWeight: 'bold',
    textAlign: 'center',
  
  },
  
input:{
  justifyContent:"center",
  borderColor:"gray",
  textAlign:"center",
  borderRadius:0,
  borderWidth:2,
  fontSize:"bold",
marginTop:20,

},
resultValue:{
  fontSize:20,
  //fontWeight:"semibold",
justifyContent:"center",
textAlign:"center",
marginLeft:0,
borderColor:"gray",
borderWidth:2,

},
converterButtonContainer:{
  backgroundColor:"tomato",
  flexDirection:"row",
flexWrap:"Wrap",
marginTop:20,
borderColor:"tomato",
borderWidth:2,
},
converterButton:{
  justifyContent:"center",
  textAlign:"center",
  backgroundColor:"tomato",
  borderColor:"gray",
  borderWidth:2,
  width:"33%",

}

});
