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
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#000000',
  },
  headerLeft: {
    flexDirection: 'column',
  },
  logoText: {
    fontSize: 18,
    fontWeight: 'bold',
    letterSpacing: 2,
    fontFamily: 'Helvetica-Bold',
    marginBottom: 4,
  },
  contactText: {
    fontSize: 8,
    color: '#4b5563',
    marginBottom: 2,
  },
  headerRight: {
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  dateText: {
    fontSize: 10,
    color: '#000000',
    marginBottom: 4,
  },
  clientName: {
    fontSize: 10,
    fontWeight: 'bold',
    fontFamily: 'Helvetica-Bold',
  },
  table: {
    width: '100%',
    marginBottom: 20,
  },
  tableHeader: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#000000',
    paddingBottom: 6,
    marginBottom: 6,
  },
  tableColHeader: {
    fontSize: 8,
    fontWeight: 'bold',
    fontFamily: 'Helvetica-Bold',
    color: '#000000',
  },
  tableRow: {
    flexDirection: 'row',
    paddingVertical: 8,
    borderBottomWidth: 0.5,
    borderBottomColor: '#e5e7eb',
  },
  tableCol: {
    fontSize: 10,
  },
  colNo: { width: '10%' },
  colDesc: { width: '45%' },
  colPrice: { width: '15%', textAlign: 'right' },
  colQty: { width: '15%', textAlign: 'center' },
  colTotal: { width: '15%', textAlign: 'right' },
  totalsContainer: {
    marginTop: 10,
    alignItems: 'flex-end',
    marginBottom: 30,
  },
  totalRow: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginBottom: 4,
  },
  grandTotalRow: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 4,
    paddingTop: 4,
    borderTopWidth: 1,
    borderTopColor: '#000000',
  },
  totalLabel: {
    fontSize: 10,
    color: '#4b5563',
    marginRight: 20,
  },
  totalValue: {
    fontSize: 10,
    width: '15%',
    textAlign: 'right',
  },
  grandTotalLabel: {
    fontSize: 12,
    fontWeight: 'bold',
    fontFamily: 'Helvetica-Bold',
    marginRight: 20,
  },
  grandTotalValue: {
    fontSize: 12,
    fontWeight: 'bold',
    fontFamily: 'Helvetica-Bold',
    width: '15%',
    textAlign: 'right',
  },
  policiesSection: {
    marginBottom: 20,
  },
  policiesText: {
    fontSize: 8,
    color: '#4b5563',
    lineHeight: 1.4,
  },
  upsellSection: {
    marginTop: 'auto',
    paddingTop: 15,
    borderTopWidth: 1,
    borderTopColor: '#e5e7eb',
  },
  upsellTitle: {
    fontSize: 10,
    fontWeight: 'bold',
    fontFamily: 'Helvetica-Bold',
    marginBottom: 8,
  },
  upsellItem: {
    flexDirection: 'row',
    marginBottom: 4,
  },
  upsellDot: {
    width: 3,
    height: 3,
    backgroundColor: '#000000',
    borderRadius: 1.5,
    marginTop: 3,
    marginRight: 6,
  },
  upsellName: {
    fontSize: 8,
    fontWeight: 'bold',
    fontFamily: 'Helvetica-Bold',
  },
  upsellDesc: {
    fontSize: 8,
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

export interface AddOnItem {
  id: string;
  description: string;
  price: number;
}

export interface QuotationData {
  clientName: string;
  trips: Trip[];
  addons: AddOnItem[];
  subtotal: number;
  platformFee: number;
  grandTotal: number;
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
    subtotal: isEN ? 'Subtotal' : 'Subtotal',
    fee: isEN ? '5% Platform & Tax Fee' : 'Cargo de Plataforma (5%)',
    grandTotal: isEN ? 'TOTAL' : 'TOTAL',
    dateLabel: isEN ? 'Date:' : 'Fecha:',
    passengerLabel: isEN ? 'Passenger:' : 'Pasajero:',
    upsellTitle: isEN ? 'Add Extras to your Journey' : 'Añade extras a tu viaje',
    policies: isEN ?
      `Book your journey with Blvck Sheep\nTo secure your itinerary and guarantee availability, we require an initial deposit:\nPrivate Transfer: Payment of the first trip (multiple dates) or 50% of your single trip.\nShared Shuttle: Full payment of the first leg.\nMethod: Payment link (Visa/Mastercard) via Recurrente.com (Includes a 5% platform fee).\nBalance payment: In cash on the day of the trip or via payment link.\nCancellation Policies: +24 hours notice: 100% refund. Less than 24 hours: Non-refundable.\nFull terms: blvck-sheep.com/terms-conditions.`
      :
      `Reserva tu viaje con Blvck Sheep\nPara asegurar tu itinerario y garantizar la disponibilidad, solicitamos un anticipo:\nTraslado Privado: Pago del primer viaje (múltiples fechas) o el 50% de tu viaje único.\nShuttle Compartido: Pago total del primer trayecto.\nMétodo: Link de pago (Visa/Mastercard) vía Recurrente.com (Incluye un recargo del 5% por uso de plataforma).\nPago del saldo: En efectivo el día del viaje o mediante link de pago.\nPolíticas de Cancelación: +24 hrs de anticipación: Reembolso del 100%. Menos de 24 hrs: No reembolsable.\nTérminos completos: blvck-sheep.com/terms-conditions.`,
  };

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.headerLeft}>
            <Text style={styles.logoText}>BLVCK SHEEP</Text>
            <Text style={styles.contactText}>Panajachel, Guatemala</Text>
            <Text style={styles.contactText}>connect@blvck-sheep.com</Text>
          </View>
          <View style={styles.headerRight}>
            <Text style={styles.dateText}>
              {t.dateLabel}{' '}
              {new Date().toLocaleDateString(isEN ? 'en-US' : 'es-ES', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </Text>
            <Text style={styles.clientName}>
              {t.passengerLabel} {data.clientName || (isEN ? 'Client' : 'Cliente')}
            </Text>
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

          {/* Render Add-ons if any */}
          {data.addons.map((addon, index) => (
            <View key={addon.id} style={styles.tableRow}>
              <Text style={[styles.tableCol, styles.colNo]}>
                +
              </Text>
              <View style={[styles.tableCol, styles.colDesc]}>
                <Text style={{ fontFamily: 'Helvetica-Bold', marginBottom: 2 }}>
                  {addon.description || 'Extra Service'}
                </Text>
                <Text style={{ color: '#666666', fontSize: 8 }}>
                  {isEN ? 'Add-on / Extra' : 'Extra / Adicional'}
                </Text>
              </View>
              <Text style={[styles.tableCol, styles.colPrice]}>
                Q{addon.price.toFixed(2)}
              </Text>
              <Text style={[styles.tableCol, styles.colQty]}>
                1
              </Text>
              <Text style={[styles.tableCol, styles.colTotal]}>
                Q{addon.price.toFixed(2)}
              </Text>
            </View>
          ))}
        </View>

        {/* Totals Section */}
        <View style={styles.totalsContainer}>
          <View style={styles.totalRow}>
            <Text style={styles.totalLabel}>{t.subtotal}</Text>
            <Text style={styles.totalValue}>Q{data.subtotal.toFixed(2)}</Text>
          </View>
          <View style={styles.totalRow}>
            <Text style={styles.totalLabel}>{t.fee}</Text>
            <Text style={styles.totalValue}>Q{data.platformFee.toFixed(2)}</Text>
          </View>
          <View style={styles.grandTotalRow}>
            <Text style={styles.grandTotalLabel}>{t.grandTotal}</Text>
            <Text style={styles.grandTotalValue}>Q{data.grandTotal.toFixed(2)}</Text>
          </View>
        </View>

        {/* Policies Section */}
        <View style={styles.policiesSection}>
          <Text style={styles.policiesText}>{t.policies}</Text>
        </View>

        {/* Upsell Section */}
        <View style={styles.upsellSection}>
          <Text style={styles.upsellTitle}>{t.upsellTitle}</Text>
          {addOns.map((addon) => {
            const desc = isEN ? addon.descriptionEN : addon.descriptionES;
            if (!desc) return null; // In case of empty translation
            return (
              <View key={addon.id} style={styles.upsellItem}>
                <View style={styles.upsellDot} />
                <Text style={styles.upsellName}>{addon.name}: </Text>
                <Text style={styles.upsellDesc}>{desc}</Text>
              </View>
            );
          })}
        </View>
      </Page>
    </Document>
  );
}
