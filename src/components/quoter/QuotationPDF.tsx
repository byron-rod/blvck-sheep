import React from 'react';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
import { sharedRoutes, addOns } from '@/data/pricing';

const styles = StyleSheet.create({
  page: {
    padding: 40,
    fontFamily: 'Helvetica',
    backgroundColor: '#ffffff',
    color: '#000000',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 40,
    borderBottomWidth: 1,
    borderBottomColor: '#000000',
    paddingBottom: 20,
  },
  logoText: {
    fontSize: 24,
    fontWeight: 'bold',
    letterSpacing: 2,
    fontFamily: 'Helvetica-Bold',
  },
  headerRight: {
    alignItems: 'flex-end',
  },
  dateText: {
    fontSize: 10,
    color: '#666666',
    marginBottom: 4,
  },
  clientName: {
    fontSize: 12,
    fontWeight: 'bold',
    fontFamily: 'Helvetica-Bold',
  },
  table: {
    width: '100%',
    marginBottom: 30,
  },
  tableHeader: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#000000',
    paddingBottom: 8,
    marginBottom: 8,
  },
  tableColHeader: {
    fontSize: 10,
    fontWeight: 'bold',
    fontFamily: 'Helvetica-Bold',
    color: '#000000',
  },
  tableRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#eeeeee',
    paddingVertical: 12,
  },
  tableCol: {
    fontSize: 10,
  },
  colNo: { width: '10%' },
  colDesc: { width: '45%' },
  colPrice: { width: '15%', textAlign: 'right' },
  colQty: { width: '15%', textAlign: 'center' },
  colTotal: { width: '15%', textAlign: 'right' },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 10,
    marginBottom: 5,
  },
  totalLabel: {
    fontSize: 12,
    fontWeight: 'bold',
    fontFamily: 'Helvetica-Bold',
    marginRight: 20,
  },
  totalValue: {
    fontSize: 12,
    fontWeight: 'bold',
    fontFamily: 'Helvetica-Bold',
    width: '15%',
    textAlign: 'right',
  },
  feeNote: {
    fontSize: 8,
    color: '#666666',
    textAlign: 'right',
    marginBottom: 40,
  },
  upsellSection: {
    marginTop: 'auto',
    paddingTop: 20,
    borderTopWidth: 1,
    borderTopColor: '#000000',
  },
  upsellTitle: {
    fontSize: 12,
    fontWeight: 'bold',
    fontFamily: 'Helvetica-Bold',
    marginBottom: 10,
  },
  upsellItem: {
    flexDirection: 'row',
    marginBottom: 6,
  },
  upsellDot: {
    width: 3,
    height: 3,
    backgroundColor: '#000000',
    borderRadius: 1.5,
    marginTop: 4,
    marginRight: 6,
  },
  upsellName: {
    fontSize: 9,
    fontWeight: 'bold',
    fontFamily: 'Helvetica-Bold',
  },
  upsellDesc: {
    fontSize: 9,
    color: '#666666',
  },
});

export interface Trip {
  id: string;
  date: string;
  type: 'shared' | 'private' | 'group';
  routeId: string;
  customRouteName: string;
  pax: number;
  price: number;
}

export interface QuotationData {
  clientName: string;
  trips: Trip[];
  total: number;
}

interface Props {
  data: QuotationData;
  language: 'EN' | 'ES';
}

const getRouteName = (routeId: string, customName: string) => {
  if (routeId === 'custom') return customName || 'Custom Route';
  const route = sharedRoutes.find(r => r.id === routeId);
  return route ? `${route.from} to ${route.to}` : 'Unknown Route';
};

const getTypeName = (type: string, lang: 'EN' | 'ES') => {
  if (type === 'shared') return lang === 'EN' ? 'Shared Shuttle' : 'Transporte Compartido';
  if (type === 'private') return lang === 'EN' ? 'Private Service' : 'Servicio Privado';
  return lang === 'EN' ? 'Group Service' : 'Servicio de Grupo';
};

export default function QuotationPDF({ data, language }: Props) {
  const isEN = language === 'EN';

  const t = {
    no: isEN ? 'NO.' : 'NO.',
    desc: isEN ? 'DESCRIPTION' : 'DESCRIPCIÓN',
    price: isEN ? 'PRICE' : 'PRECIO',
    qty: isEN ? 'QTY' : 'CANT',
    total: isEN ? 'TOTAL' : 'TOTAL',
    totalLabel: isEN ? 'TOTAL' : 'TOTAL',
    feeNote: isEN ? 'Prices include 5% platform fee.' : 'Los precios incluyen el 5% de cargo por uso de plataforma.',
    upsellTitle: isEN ? 'Add Extras to your Journey' : 'Añade extras a tu viaje',
  };

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.logoText}>BLVCK SHEEP</Text>
          <View style={styles.headerRight}>
            <Text style={styles.dateText}>
              {new Date().toLocaleDateString(isEN ? 'en-US' : 'es-ES', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </Text>
            <Text style={styles.clientName}>{data.clientName || (isEN ? 'Client' : 'Cliente')}</Text>
          </View>
        </View>

        {/* Table */}
        <View style={styles.table}>
          <View style={styles.tableHeader}>
            <Text style={[styles.tableColHeader, styles.colNo]}>{t.no}</Text>
            <Text style={[styles.tableColHeader, styles.colDesc]}>{t.desc}</Text>
            <Text style={[styles.tableColHeader, styles.colPrice]}>{t.price}</Text>
            <Text style={[styles.tableColHeader, styles.colQty]}>{t.qty}</Text>
            <Text style={[styles.tableColHeader, styles.colTotal]}>{t.total}</Text>
          </View>

          {data.trips.map((trip, index) => (
            <View key={trip.id} style={styles.tableRow}>
              <Text style={[styles.tableCol, styles.colNo]}>
                {(index + 1).toString().padStart(2, '0')}
              </Text>
              <View style={[styles.tableCol, styles.colDesc]}>
                <Text style={{ fontFamily: 'Helvetica-Bold', marginBottom: 2 }}>
                  {getRouteName(trip.routeId, trip.customRouteName)}
                </Text>
                <Text style={{ color: '#666666', fontSize: 8 }}>
                  {getTypeName(trip.type, language)} • {trip.date}
                </Text>
              </View>
              <Text style={[styles.tableCol, styles.colPrice]}>
                Q{trip.price.toFixed(2)}
              </Text>
              <Text style={[styles.tableCol, styles.colQty]}>
                {trip.pax}
              </Text>
              <Text style={[styles.tableCol, styles.colTotal]}>
                Q{trip.price.toFixed(2)}
              </Text>
            </View>
          ))}
        </View>

        {/* Total & Fee Note */}
        <View style={styles.totalContainer}>
          <Text style={styles.totalLabel}>{t.totalLabel}</Text>
          <Text style={styles.totalValue}>Q{data.total.toFixed(2)}</Text>
        </View>
        <Text style={styles.feeNote}>{t.feeNote}</Text>

        {/* Upsell Section */}
        <View style={styles.upsellSection}>
          <Text style={styles.upsellTitle}>{t.upsellTitle}</Text>
          {addOns.map((addon) => (
            <View key={addon.id} style={styles.upsellItem}>
              <View style={styles.upsellDot} />
              <Text style={styles.upsellName}>{addon.name}: </Text>
              <Text style={styles.upsellDesc}>
                {isEN ? addon.descriptionEN : addon.descriptionES}
              </Text>
            </View>
          ))}
        </View>
      </Page>
    </Document>
  );
}
