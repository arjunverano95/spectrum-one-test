import React from 'react';
import {Image, StyleSheet, View} from 'react-native';

import {Badge, Card, Text} from '@rneui/themed';

import {Colors, Sizes, Types} from '../../app/constants';
import {PokemonCard} from '../../models/PokemonCard';
import CardImage from './CardImage';

interface CardDetailsProps {
  data: PokemonCard;
}

const CardDetails = (props: CardDetailsProps) => {
  const {data} = props;

  if (!data) return <></>;

  return (
    <>
      <View style={styles.container}>
        <Card containerStyle={styles.cardContainer}>
          <View style={styles.cardTitleContainer}>
            {data.types.map((type) =>
              Types[type] ? (
                <Image
                  key={type}
                  resizeMode={'contain'}
                  style={styles.iconImg}
                  source={Types[type]}
                />
              ) : (
                <Badge
                  key={type}
                  badgeStyle={styles.badge}
                  textStyle={styles.badgeText}
                  value={type.slice(0, 3)}
                  status="success"
                />
              ),
            )}
            <Card.Title style={styles.cardTitle}>{`${data.name}`}</Card.Title>
          </View>
          <Card.Divider />
          <View>
            <Text>{`ID: ${data.id}`}</Text>
          </View>
        </Card>
        <View style={styles.imageContainer}>
          <CardImage data={data} />
        </View>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  container: {alignItems: 'center', paddingHorizontal: 10, flex: 1},
  cardContainer: {
    borderWidth: 0,
    backgroundColor: Colors.white,
    marginTop: 10,
    width: '100%',
    maxWidth: Sizes.sm,
  },
  cardTitleContainer: {flexDirection: 'row'},
  rarityBadge: {
    height: 22,
    minWidth: 45,
    paddingHorizontal: 5,
    marginRight: 5,
  },
  raritytext: {fontWeight: 'bold'}, // alignSelf: 'flex-start'}
  cardTitle: {flex: 1, textAlign: 'left', marginTop: 3},
  cardSubTitle: {fontWeight: 'normal'},
  imageContainer: {
    width: '100%',
    maxWidth: Sizes.sm,
    flex: 1,
  },
  badge: {
    height: 20,
    minWidth: 40,
    paddingHorizontal: 1,
    marginRight: 5,
    fontSize: 9,
  },
  badgeText: {fontWeight: 'bold'}, // alignSelf: 'flex-start'}
  textContent: {fontSize: 11, color: Colors.greyOutline},
  cardFooter: {paddingHorizontal: 8, paddingVertical: 3},
  iconImg: {
    height: 25,
    width: 25,
    marginRight: 5,
  },
});
export default CardDetails;
