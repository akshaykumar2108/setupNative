import React from 'react';
import { Text, View, StyleSheet, Image, FlatList } from 'react-native';

export default function RatingComp({ rating, ratingOnClick }) {
  return (
    <View style={styles.ratingContainer} onClick={ratingOnClick}>
      <View style={styles.ratingInner}>
        <Text style={styles.valueClass}>★ {rating.value}</Text>
        <Text style={styles.countClass}> ({rating.count})</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  ratingContainer: {
    position: 'absolute',
    top: 116,
    left: 16,
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 4,
  },
  ratingInner: {
    borderRadius: 4,
    paddingLeft: 8,
    paddingRight: 8,
    backgroundColor: 'rgb(255, 255, 255)',
    // border: '1 solid rgba(0, 0, 0, 0.12)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 24,
    flexDirection: 'row',
  },
  valueClass: {
    fontWeight: "500",
    fontSize: 12,
    lineHeight: 16,
    letterSpacing: 1,
  },
  countClass: {
    fontWeight: "500",
    fontSize: 12,
    lineHeight: 16,
    letterSpacing: 1,
    color: 'rgba(0, 0, 0, 0.5)',
  },
});
