import React from "react";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Image,
  Font,
} from "@react-pdf/renderer";

export default function Report({ data }) {
  const styles = StyleSheet.create({
    page: {
      backgroundColor: "#E4E4E4",
      fontFamily: "Helvetica-Bold",
      padding: "20px",
    },
    container: {
      flexDirection: "row",
      padding: 20,
      alignItems: "center",
      marginTop: "30px",
    },
    item: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flex: 1,
    },
    avatar: {
      width: 100,
      height: 100,
      marginBottom: 10,
    },
    info: {
      marginBottom: 10,
      textAlign: "center",
    },
  });

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View>
          <Text
            style={{
              textAlign: "center",
              fontSize: "40px",
              textTransform: "uppercase",
            }}
          >
            Trasnaction
          </Text>
          <Text style={{ textAlign: "center", fontSize: "20px" }}>
            #{data.id}
          </Text>
        </View>

        <View style={styles.container}>
          <View style={styles.item}>
            <Image style={styles.avatar} src={data.sender.avatarImg} />
            <Text style={styles.info}>Sender: {data.sender.name}</Text>
          </View>

          <View style={styles.item}>
            <Image style={styles.avatar} src={data.receiver.avatarImg} />
            <Text style={styles.info}>Receiver: {data.receiver.name}</Text>
          </View>
        </View>

        <View>
          <Text style={styles.info}>Amount: {data.amount}$</Text>
          <Text style={styles.info}>Status: {data.status}</Text>
        </View>
      </Page>
    </Document>
  );
}
