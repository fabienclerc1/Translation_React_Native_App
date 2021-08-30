import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
   container: {
       marginLeft: 10,
       marginRight: 10,
       marginBottom: 5,
       borderRadius: 4,
   },
   titleExpandedContainer: {
       flexDirection: 'row',
       justifyContent: 'space-between',
       alignItems: 'center',
       backgroundColor: 'white',
       borderBottomColor: '#ddd',
       borderBottomWidth: 1,
       borderTopLeftRadius: 4,
       borderTopRightRadius: 4,
       paddingLeft: 5,
       paddingTop: 5,
       paddingBottom: 5,
   },
   titleCollidedContainer: {
       flexDirection: 'row',
       justifyContent: 'space-between',
       alignItems: 'center',
       backgroundColor: 'white',
       borderRadius: 4,
       paddingLeft: 5,
       paddingTop: 5,
       paddingBottom: 5,
   },
   childrenContainer: {
       padding: 5,
       backgroundColor: 'white',
       borderBottomLeftRadius: 4,
       borderBottomRightRadius: 4,
   },
   title: {
       fontSize: 20,
       color: 'rgba(0,0,0,0.8)',
   },
});