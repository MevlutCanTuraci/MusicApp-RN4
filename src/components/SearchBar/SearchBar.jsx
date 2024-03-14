import { React } from "react";
import { View, TextInput } from "react-native";
import styles from "./SearchBar.style"

const SearchBar = (props) => {

    return (
        <View style={styles.container}>
            <TextInput
                placeholder="Ara..."
                onChangeText={props.OnSearch}
            />
        </View>
    );

}

export default SearchBar;