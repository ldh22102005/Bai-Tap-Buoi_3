import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const DATA = [
  {
    id: "1",
    icon: "✓",
    title: "Bước 1 Xác định nhu cầu khách hàng",
    desc: "Lê Đình Hoàng sắp đến hạn lúc 01/08/2020 9:00",
    time: "20/08/2020, 06:00",
  },
  {
    id: "2",
    icon: "👥",
    title: "Bạn có khách hàng mới!",
    desc: "Chúc mừng bạn, bạn có khách hàng mới. Hãy mau chóng liên lạc ngay.",
    time: "20/08/2020, 06:00",
  },
  {
    id: "3",
    icon: "👥",
    title: "Khách hàng được chia sẻ bị trùng",
    desc: "Rất tiếc, khách hàng được chia sẻ đã tồn tại trên hệ thống. Vui lòng chia sẻ khách hàng.",
    time: "20/08/2020, 06:00",
  },
  {
    id: "4",
    icon: "👥",
    title: "Khách hàng được thêm bị trùng",
    desc: "Rất tiếc, khách hàng được thêm đã tồn tại trên hệ thống. Vui lòng thêm khách hàng.",
    time: "20/08/2020, 06:00",
  },
  {
    id: "5",
    icon: "✓",
    title: "Công việc sắp đến hạn trong hôm nay",
    desc: "Bạn có 17 công việc sắp đến hạn trong hôm nay.",
    time: "20/08/2020, 06:00",
  },
  {
    id: "6",
    icon: "✓",
    title: "Công việc đã quá hạn",
    desc: "Bạn có 17 công việc bị quá hạn. Hãy kiểm tra và lên kế hoạch hoàn thành công việc.",
    time: "20/08/2020, 06:00",
  },
];

function Item({ item, index }) {
  const highlight = index === 0; // dòng đầu giống hình: nền xanh nhạt
  return (
    <View style={[styles.row, highlight && styles.rowHighlight]}>
      <View style={styles.iconWrap}>
        <Text style={styles.iconText}>{item.icon}</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.desc}>{item.desc}</Text>
        <Text style={styles.time}>{item.time}</Text>
      </View>
    </View>
  );
}

export default function NotificationScreen() {
  return (
    <View style={styles.screen}>
      <Text style={styles.header}>Thông báo</Text>

      <FlatList
        data={DATA}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => <Item item={item} index={index} />}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "700",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  listContent: {
    paddingVertical: 8,
  },
  row: {
    flexDirection: "row",
    paddingHorizontal: 14,
    paddingVertical: 12,
    backgroundColor: "#fff",
  },
  rowHighlight: {
    backgroundColor: "#eaf3ff",
  },
  iconWrap: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: "#2f4aa0",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  iconText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "700",
  },
  content: {
    flex: 1,
  },
  title: {
    fontSize: 14,
    fontWeight: "700",
    marginBottom: 2,
    color: "#111",
  },
  desc: {
    fontSize: 12.5,
    color: "#333",
    marginBottom: 6,
  },
  time: {
    fontSize: 12,
    color: "#888",
  },
  separator: {
    height: 1,
    backgroundColor: "#eee",
    marginLeft: 70, // giống hình: line không đi qua icon
  },
});
