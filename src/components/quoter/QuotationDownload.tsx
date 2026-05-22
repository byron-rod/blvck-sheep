'use client';

import React, { useEffect, useState } from 'react';
import { PDFDownloadLink } from '@react-pdf/renderer';
import QuotationPDF, { QuotationData } from './QuotationPDF';

interface Props {
  data: QuotationData;
  language: 'EN' | 'ES';
}

export default function QuotationDownload({ data, language }: Props) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return (
      <button disabled className="w-full py-4 rounded-lg bg-zinc-800 text-white font-bold opacity-50 cursor-not-allowed">
        Loading PDF Engine...
      </button>
    );
  }

  return (
    <PDFDownloadLink
      document={<QuotationPDF data={data} language={language} />}
      fileName={`BlvckSheep-${data.clientName || 'Client'}-${new Date().toISOString().split('T')[0]}.pdf`}
      className="w-full block"
    >
      {({ loading }) => (
        <button
          disabled={loading}
          className={`w-full py-4 rounded-lg font-bold text-center transition-colors ${loading ? 'bg-zinc-800 text-zinc-400' : 'bg-white text-black hover:bg-zinc-200'
            }`}
        >
          {loading
            ? (language === 'EN' ? 'Generating PDF...' : 'Generando PDF...')
            : (language === 'EN' ? 'Generate & Download PDF' : 'Generar y Descargar PDF')}
        </button>
      )}
    </PDFDownloadLink>
  );
}
