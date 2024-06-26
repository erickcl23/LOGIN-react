import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

import loginScreen from "./Screens/loginScreen";
import registroScreen from "./Screens/registroScreen";

const Tab = createBottomTabNavigator();

function MyTabs() {
    return(

        <Tab.Navigator>
            <Tab.Screen name="login" component={loginScreen}/>
            <Tab.Screen name="register" component={registroScreen}/>
        </Tab.Navigator>

    );
}

export default function Navigation(){
    return(
        <NavigationContainer>
            <MyTabs/>
        </NavigationContainer>
    );
}