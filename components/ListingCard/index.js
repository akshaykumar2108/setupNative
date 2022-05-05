import React, { useEffect } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import HotelCarousel from './HotelCarousel';
import RatingComp from './RatingComp';
import { Button } from 'react-native';


export default function ListingCard({
   data,
  listingCardOnClick,
  ratingOnClick,
  widgetViewGa,
  primaryCta,
  secondaryCta,
  primaryCtaHandler,
  secondaryCtaHandler
}) {
  const {
    hotel_images,
    name,
    address,
    urgency_info: urgencyInfo,
    pricing: { bookingPrice, discountPercentage, slashedPrice },
    rating,
    id
  } = data;

  useEffect(() => {
    widgetViewGa && widgetViewGa();
  },[]);

  return (
    <View style={styles.listingCard} onClick={(e) => listingCardOnClick(e)}>
      <HotelCarousel images={hotel_images} />
      <RatingComp rating={rating} ratingOnClick={ratingOnClick}/>
      <View style={styles.innerWrapper}>
        <Text style={styles.textClass}>{name}</Text>
        <Text style={styles.addressClass}>{address}</Text>
        <Text style={styles.urgencyClass}>👉{urgencyInfo}</Text>
        <View style={styles.priceWrapperClass}>
          <Text style={styles.bookingPriceClass}>{bookingPrice}</Text>
          <Text style={styles.slashedPriceClass}>{slashedPrice}</Text>
          <Text style={styles.discountClass}>{discountPercentage}% off</Text>
        </View>
        <View style={styles.fixToText}>
        <TouchableOpacity onPress={primaryCtaHandler}>
            <Text style={styles.primaryBtnClass}>{primaryCta}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={secondaryCtaHandler}>
            <Text style={styles.secondaryBtnClass}>{secondaryCta}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  listingCard: {
    // border: '1 solid rgba(0,0,0,0.12)',
    borderRadius: 6,
    marginLeft: 16,
    marginRight: 16,
    overflow: 'hidden',
    marginBottom: 16,
    marginTop: 16,
  },
  innerWrapper: {
    paddingTop: 24,
    paddingRight: 16,
    paddingLeft: 16,
    paddingBottom: 16,
  },
  textClass: {
    fontWeight: "500",
    fontSize: 16,
    lineHeight: 24,
  },
  addressClass: {
    color: 'rgba(0, 0, 0, 0.5)',
    fontWeight: "500",
    fontSize: 12,
    lineHeight: 16,
    letterSpacing: 1,
    marginBottom: 8,
  },
  urgencyClass: {
    fontWeight: "500",
    fontSize: 12,
    lineHeight: 16,
    letterSpacing: 1,
    color: 'rgb(223, 150, 65)',
    display: 'flex',
    alignItems: 'center',
    marginBottom: 8,
  },
  priceWrapperClass: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  bookingPriceClass: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: 'bold',
    marginRight: 8,
  },
  slashedPriceClass: {
    fontWeight: "500",
    fontSize: 12,
    lineHeight: 16,
    letterSpacing: 1,
    marginRight: 8,
    textDecorationLine: 'line-through',
  },
  discountClass: {
    fontWeight: "500",
    fontSize: 12,
    lineHeight: 16,
    letterSpacing: 1,
    color: 'rgb(0, 178, 138)',
  },
  fixToText: {
    flexDirection: 'row',
    marginTop: 8
  },
  primaryBtnClass: {
    backgroundColor: '#1ab64f',
    color: '#fff',
    borderRadius: 2,
    // border: '1 solid #1ab64f',
    padding: 8
  },
  secondaryBtnClass: {
    backgroundColor: '#fff',
    color: '#222',
    borderRadius: 2,
    // border: '1 solid #222',
    padding: 8,
    marginLeft: 8
  }
});
