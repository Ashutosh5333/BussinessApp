import React from 'react'
import * as WebBrowser from "expo-web-browser"
import { Platform } from 'react-native';

export const useWarmUpBrowser = () => {
  // React.useEffect(()=>{
  //  void WebBrowser.warmUpAsync();
  //    return () =>{
  //       void WebBrowser.coolDownAsync();
  //    }
  // },[])
  React.useEffect(() => {
    if (Platform.OS !== 'web') {
      void WebBrowser.warmUpAsync();
      return () => {
        void WebBrowser.coolDownAsync();
      };
    }
    return () => {
      void WebBrowser.coolDownAsync();
    }
  }, []);

}
