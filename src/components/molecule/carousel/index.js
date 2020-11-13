import React from 'react';
import { StyleSheet, View } from 'react-native';
import SkeletonPlaceholder from "react-native-skeleton-placeholder";

const Carousel = () => {
    return (
    <SkeletonPlaceholder>
        <View style={{height: 100}} />
    </SkeletonPlaceholder>
    )
}

export default Carousel

const styles = StyleSheet.create({})
