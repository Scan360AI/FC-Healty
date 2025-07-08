/**
 * SCAN - Strategic Corporate Analysis Navigator
 * Configurazione Dati e Opzioni per Grafici Chart.js
 * Versione 1.2 - DATI FLC HEALTHY EVOLUTION S.R.L. (DA REPORT LEANUS/KITZANOS)
 *
 * Dati aggiornati sulla base dei file .md forniti per FLC HEALTHY EVOLUTION S.R.L. al 12/2024.
 * Eventuali dati mancanti o che richiedono normalizzazione specifica sono lasciati come esempio o commentati.
 */

// ======================================
// FUNZIONI PER RECUPERARE I DATI SPECIFICI
// ======================================

// --- Dati per Dashboard Esecutiva (dashboard.html) ---
function getTrendRicaviEbitdaData_Dashboard() {
    // console.log("Fornitura dati per trendRicaviEbitdaChart (Dashboard) - FLC HEALTHY EVOLUTION S.R.L.");
    // Fonte: PARTE1, PARTE2 (2.1.1, 2.1.2)
    return {
        labels: ["2022", "2023", "2024"],
        datasets: [
             {
                 label: "Ricavi (€)",
                 data: [818166, 813109, 1037515], // Valori assoluti
                 borderColor: 'rgb(25, 25, 112)',
                 backgroundColor: 'rgba(25, 25, 112, 0.1)',
                 type: 'line', tension: 0.1, yAxisID: 'y', fill: true, pointRadius: 3,
             },
             {
                 label: "EBITDA (€)",
                 data: [155297, 20908, 154660], // Valori assoluti
                 borderColor: 'rgb(77, 140, 87)',
                 backgroundColor: 'rgba(77, 140, 87, 0.7)',
                 type: 'bar', yAxisID: 'y', barPercentage: 0.6, categoryPercentage: 0.7
             },
              {
                  label: "EBITDA Margin (%)",
                  data: [19.0, 2.6, 14.91], // Percentuale
                  borderColor: 'rgb(217, 140, 0)',
                  backgroundColor: 'transparent',
                  type: 'line', tension: 0.1, yAxisID: 'y1', fill: false, borderDash: [5, 5], pointRadius: 3
              }
        ]
    };
}

function getTrendPfnEbitdaData_Dashboard() {
    // console.log("Fornitura dati per trendPfnEbitdaChart (Dashboard) - FLC HEALTHY EVOLUTION S.R.L.");
    // Fonte: PARTE1, PARTE4 (4.2.1 / 4.5.1)
    return {
         labels: ["2022", "2023", "2024"],
         datasets: [
             {
                 label: "PFN/EBITDA",
                 data: [-0.58, -2.77, -0.65], // Valori del rapporto (negativi indicano PFN negativa, ossia liquidità netta)
                 borderColor: 'rgb(77, 140, 87)',
                 backgroundColor: 'rgba(77, 140, 87, 0.2)',
                 tension: 0.1, fill: true, pointRadius: 5, pointHoverRadius: 7,
                 pointBackgroundColor: 'rgb(77, 140, 87)'
             },
              {
                 label: 'Soglia Attenzione (<3x)',
                 data: [3, 3, 3], // Linea target (mantenuta)
                 borderColor: 'rgb(255, 193, 7)',
                 borderDash: [5, 5], fill: false, pointRadius: 0, borderWidth: 2,
             }
         ]
     };
}

// --- Dati per Report Dettagliati (report/parteX_*.html) ---

// Dati Parte 1
function getMainMetricsData() {
    // console.log("Fornitura dati per mainMetricsChart (Report Parte 1) - FLC HEALTHY EVOLUTION S.R.L.");
    // Fonte: PARTE1_flc_healthy_evolution_analisi_parte1.md (1.1 Sintesi)
     return {
         labels: ["2022", "2023", "2024"], // Rimosso previsionale
         datasets: [
             // Dati arrotondati in migliaia
             { label: "Ricavi (€000)", data: [818, 813, 1038], backgroundColor: "rgba(25, 25, 112, 0.7)" },
             { label: "EBITDA (€000)", data: [155, 21, 155], backgroundColor: "rgba(77, 140, 87, 0.7)" },
             { label: "Patrimonio Netto (€000)", data: [649, 670, 776], backgroundColor: "rgba(217, 140, 0, 0.7)" }
         ]
     };
}
function getCurrentAssetsLiabilitiesData() {
    // console.log("Fornitura dati per currentAssetsLiabilitiesChart (Report Parte 1) - FLC HEALTHY EVOLUTION S.R.L.");
    // Fonte: PARTE3_flc_analisi_patrimoniale.md (3.1)
     return {
         labels: ["2023", "2024"],
         datasets: [
             { label: "Attivo Corrente", data: [300871, 475318], backgroundColor: "rgba(25, 25, 112, 0.7)" },
             { label: "Passivo Corrente", data: [147659, 213287], backgroundColor: "rgba(214, 34, 70, 0.7)" },
             { label: "Capitale Circolante Netto", data: [153212, 262031], backgroundColor: "rgba(77, 140, 87, 0.7)" } // Calcolato: AC - PC
         ]
     };
}

// Dati Parte 2
function getEconomicTrendData() {
    // console.log("Fornitura dati per economicTrendChart (Report Parte 2) - FLC HEALTHY EVOLUTION S.R.L.");
    // Uguale a getTrendRicaviEbitdaData_Dashboard ma usa valori in €000 per coerenza con altre tabelle
    const dataAbs = getTrendRicaviEbitdaData_Dashboard(); // Prende i dati aggiornati
    dataAbs.datasets[0].data = dataAbs.datasets[0].data.map(v => v ? Math.round(v / 1000) : null); // Ricavi in K (arrotondati)
    dataAbs.datasets[1].data = dataAbs.datasets[1].data.map(v => v ? Math.round(v / 1000) : null); // EBITDA in K (arrotondati)
    dataAbs.datasets[0].label = "Ricavi (€000)";
    dataAbs.datasets[1].label = "EBITDA (€000)";
    return dataAbs;
}
function getMarginalityData() {
    // console.log("Fornitura dati per marginalityChart (Report Parte 2) - FLC HEALTHY EVOLUTION S.R.L.");
    // Fonte: PARTE2_flc_analisi_economica.md (2.1.1, 2.1.2)
     return {
         labels: ["2022", "2023", "2024"],
         datasets: [
            // Valori percentuali dai MD
            { label: "Valore Aggiunto %", data: [99.5, 99.7, 99.6], borderColor: "rgba(25, 25, 112, 1)", fill: false },
            { label: "Margine di Contribuzione %", data: [24.8, 21.3, 37.5], borderColor: "rgba(42, 58, 128, 1)", fill: false },
            { label: "EBITDA %", data: [19.0, 2.6, 14.9], borderColor: "rgba(77, 140, 87, 1)", fill: false },
            { label: "EBIT %", data: [17.2, 0.9, 13.6], borderColor: "rgba(217, 140, 0, 1)", fill: false }
         ]
     };
}
function getProfitabilityIndicesData() {
    // console.log("Fornitura dati per profitabilityIndicesChart (Report Parte 2) - FLC HEALTHY EVOLUTION S.R.L.");
    // Fonte: PARTE2_flc_analisi_economica.md (2.1.4)
    return {
        labels: ["2022", "2023", "2024"],
        datasets: [
            { label: "ROE %", data: [14.05, 3.02, 17.79], borderColor: "rgba(25, 25, 112, 1)", backgroundColor: "rgba(25, 25, 112, 0.2)", fill: true},
            { label: "ROI %", data: [25.16, 1.17, 20.81], borderColor: "rgba(77, 140, 87, 1)", backgroundColor: "rgba(77, 140, 87, 0.2)", fill: true},
            { label: "ROS %", data: [17.2, 0.9, 13.6], borderColor: "rgba(217, 140, 0, 1)", backgroundColor: "rgba(217, 140, 0, 0.2)", fill: true}
        ]
    };
}
function getLeverageData() {
     // console.log("Fornitura dati per leverageChart (Report Parte 2) - FLC HEALTHY EVOLUTION S.R.L.");
     // Fonte: PARTE2_flc_analisi_economica.md (2.1.4)
     return {
         labels: ["2023", "2024"],
         datasets: [
             { label: "ROI (%)", data: [1.17, 20.81], backgroundColor: "rgba(25, 25, 112, 0.7)"},
             { label: "ROE (%)", data: [3.02, 17.79], backgroundColor: "rgba(77, 140, 87, 0.7)"}
         ]
     };
}
function getBenchmarkRadarData() {
    // console.log("Fornitura dati per benchmarkRadarChart (Report Parte 2) - FLC HEALTHY EVOLUTION S.R.L.");
    // Fonte: PARTE2_flc_analisi_economica.md (2.2.1, 2.2.2)
    return {
        labels: ["Crescita Ricavi", "EBITDA Margin", "ROI", "ROE", "Liquidità/Ricavi", "Cash Flow/Ricavi", "DSO (inv)"],
        datasets: [
            {
                label: "FLC HEALTHY EVOLUTION",
                data: [325, 116, 173, 142, 229, 144, 58], // Normalizzato rispetto a benchmark
                backgroundColor: "rgba(25, 25, 112, 0.3)", borderColor: "rgba(25, 25, 112, 1)", borderWidth: 2, pointBackgroundColor: "rgba(25, 25, 112, 1)"
            },
            {
                label: "Media Settore",
                data: [100, 100, 100, 100, 100, 100, 100], // Base 100
                backgroundColor: "rgba(217, 140, 0, 0.3)", borderColor: "rgba(217, 140, 0, 1)", borderWidth: 2, pointBackgroundColor: "rgba(217, 140, 0, 1)"
            }
        ]
    };
}

// Dati Parte 3
function getAssetsData() {
    // console.log("Fornitura dati per assetsChart (Report Parte 3) - FLC HEALTHY EVOLUTION S.R.L.");
    // Fonte: PARTE3_flc_analisi_patrimoniale.md (3.1, 3.2 - dati 2024)
    const originalData = [7115, 2000, 512334, 0, 367325, 99972]; // Imm.Mat, Imm.Fin, Imm.Imm, Riman., Cred.Clienti, Liquidità
    const total = originalData.reduce((a, b) => a + b, 0);
    return {
        labels: ["Immob. Materiali", "Immob. Finanziarie", "Immob. Immateriali", "Magazzino", "Crediti Comm.", "Liquidità"],
        _originalData: originalData, // Valori originali per tooltip
        datasets: [ {
             data: originalData.map(v => total > 0 ? (v/total)*100 : 0), // Dati %
             backgroundColor: ["#191970", "#4a69bd", "#F44336", "#FFC107", "#4CAF50", "#6c757d"] // Palette definita
         } ]
    };
}
function getLiabilitiesData() {
    // console.log("Fornitura dati per liabilitiesChart (Report Parte 3) - FLC HEALTHY EVOLUTION S.R.L.");
    // Fonte: PARTE3_flc_analisi_patrimoniale.md (3.1, 3.3 - dati 2024)
    const originalData = [776453, 0, 0, 213246, 7027]; // PN, Debt Fin MLT, Debt Fin BT, Debt Comm., Altri Debiti
    const total = originalData.reduce((a, b) => a + b, 0);
     return {
         labels: ["Patrimonio Netto", "Debiti Fin. MLT", "Debiti Fin. BT", "Debiti Comm.", "Altri Debiti"],
         _originalData: originalData,
         datasets: [ {
             data: originalData.map(v => total > 0 ? (v/total)*100 : 0), // Dati %
             backgroundColor: ["#191970", "#4CAF50", "#FFC107", "#4a69bd", "#6c757d"] // Palette coerente
        } ]
     };
}
function getInvestmentsStructureData() {
    // console.log("Fornitura dati per investmentsStructureChart (Report Parte 3) - FLC HEALTHY EVOLUTION S.R.L.");
    // Fonte: PARTE3_flc_analisi_patrimoniale.md (3.1, 3.2)
    return {
        labels: ["2022", "2023", "2024"],
        datasets: [
             // Dati assoluti
             { label: "Immobilizzazioni", data: [543235, 533750, 521449], backgroundColor: "rgba(25, 25, 112, 0.7)", stack: "Stack 0" },
             { label: "Crediti commerciali", data: [156495, 181482, 367325], backgroundColor: "rgba(77, 140, 87, 0.7)", stack: "Stack 0" },
             { label: "Rimanenze", data: [0, 0, 0], backgroundColor: "rgba(217, 140, 0, 0.7)", stack: "Stack 0" },
             { label: "Liquidità", data: [93186, 70515, 99972], backgroundColor: "rgba(79, 109, 122, 0.7)", stack: "Stack 0" }
        ]
    };
}
function getEquityCompositionData() {
    // console.log("Fornitura dati per equityCompositionChart (Report Parte 3) - FLC HEALTHY EVOLUTION S.R.L.");
    // Fonte: PARTE3_flc_analisi_patrimoniale.md (3.3 - dati 2024)
    const originalData = [10000, 628626, 138155, -328]; // Capitale Sociale, Riserve, Utile Esercizio 2024, Utili a Nuovo
    const total = originalData.reduce((a, b) => a + b, 0); // Should match 776453
     return {
         labels: ["Capitale Sociale", "Riserve", "Utile Esercizio", "Utili a Nuovo"],
         _originalData: originalData,
         datasets: [ {
             data: originalData.map(v => total > 0 ? (v/total)*100 : 0), // Dati %
             backgroundColor: ["#191970", "#4CAF50", "#FFC107", "#4a69bd"]
        } ]
     };
}
function getFinancialDebtSourcesData() { // Rinominato da getFinancialDebtData per evitare conflitti
    // console.log("Fornitura dati per financialDebtSourcesChart (Report Parte 3) - FLC HEALTHY EVOLUTION S.R.L.");
    // Fonte: PARTE3_flc_analisi_patrimoniale.md (3.1, 3.3 - dati 2024)
    const originalData = [776453, 0, 0]; // PN, Debt Fin MLT, Debt Fin BT
    const total = originalData.reduce((a, b) => a + b, 0);
    return {
        labels: ["Patrimonio Netto", "Debiti Fin. MLT", "Debiti Fin. BT"],
        _originalData: originalData,
        datasets: [{
            data: originalData.map(v => total > 0 ? (v / total) * 100 : 0), // Dati %
            backgroundColor: ["#191970", "#4CAF50", "#FFC107"]
        }]
    };
}
function getPfnTrendData() {
    // console.log("Fornitura dati per pfnTrendChart (Report Parte 3) - FLC HEALTHY EVOLUTION S.R.L.");
    // Fonte: PARTE3_flc_analisi_patrimoniale.md (3.4)
    return {
         labels: ["2022", "2023", "2024"],
         datasets: [
             { label: "Debiti Finanziari Tot.", data: [3536, 12556, 0], type: "bar", backgroundColor: "rgba(214, 34, 70, 0.7)", yAxisID: 'y' },
             { label: "Liquidità", data: [93186, 70515, 99972], type: "bar", backgroundColor: "rgba(77, 140, 87, 0.7)", yAxisID: 'y'},
             { label: "PFN", data: [-89650, -57959, -99972], type: "line", borderColor: "rgba(25, 25, 112, 1)", fill: false, yAxisID: 'y' }
         ]
     };
}

// Dati Parte 4
function getDebtSustainabilityData() {
    // console.log("Fornitura dati per debtSustainabilityChart (Report Parte 4) - FLC HEALTHY EVOLUTION S.R.L.");
    // Fonte: PARTE4_flc_bancabilita_report.md (4.2, 4.3, 4.4)
     return {
         labels: ["PFN/EBITDA (inv)", "D/E (inv)", "DSCR", "Oneri Fin./Ricavi (inv)", "Cash Flow Op./Ricavi", "Leanus Score"], // Invertiti D/E e OF/Ricavi
         datasets: [
             { label: "FLC HEALTHY EVOLUTION", data: [100, 100, 100, 99.99, 72.1, 71.6], backgroundColor: "rgba(25, 25, 112, 0.2)", borderColor: "rgba(25, 25, 112, 1)" }, // Normalizzato
             { label: "Target/Benchmark", data: [67, 83, 60, 90, 50, 75], backgroundColor: "rgba(77, 140, 87, 0.2)", borderColor: "rgba(77, 140, 87, 1)" } // Benchmark
         ]
     };
}
function getDebtCostData() { // Grafico Capacità Indebitamento
    // console.log("Fornitura dati per debtCostChart (Report Parte 4) - FLC HEALTHY EVOLUTION S.R.L.");
    // Fonte: PARTE4_flc_bancabilita_report.md (4.3)
    return {
         labels: ["2022", "2023", "2024"],
         datasets: [
             // Dati arrotondati in migliaia
             { label: "EBITDA (€000)", data: [155, 21, 155], type: "bar", yAxisID: "y", backgroundColor: "rgba(77, 140, 87, 0.7)" },
             { label: "Capacità Teorica Indeb. (3.5x EBITDA, €000)", data: [543, 73, 543], type: "line", yAxisID: "y", borderColor: "rgba(25, 25, 112, 1)", fill: false } // Calcolato: EBITDA * 3.5
         ]
     };
}

// Dati Parte 5
function getWorkingCapitalCycleData() {
    // console.log("Fornitura dati per workingCapitalCycleChart (Report Parte 5) - FLC HEALTHY EVOLUTION S.R.L.");
    // Fonte: PARTE5_flc_flussi_analysis.md (5.1.1, 5.1.2, 5.1.3, 5.1.4)
    return {
        labels: ["Crediti Clienti (DSO)", "Magazzino (DIO)", "Debiti Fornitori (DPO)", "Ciclo Circolante"],
        datasets: [
            // Dati 2024 per FLC HEALTHY EVOLUTION, Benchmark da 5.1.3 / 5.1.4
            { label: "FLC HEALTHY EVOLUTION (Giorni)", data: [128, 0, 109, 19], backgroundColor: "rgba(25, 25, 112, 0.7)" },
            { label: "Benchmark Settore (Giorni)", data: [75, 30, 60, 45], backgroundColor: "rgba(77, 140, 87, 0.7)" } // Benchmark DSO=75, DIO=30, DPO=60 -> Ciclo=45
        ]
    };
}
function getCashFlowWaterfallData() {
    // console.log("Fornitura dati per cashFlowWaterfallChart (Report Parte 5) - FLC HEALTHY EVOLUTION S.R.L.");
    // Fonte: PARTE5_flc_flussi_analysis.md (5.2.1, 5.2.2 - dati 2024)
    // Calcolo: EBITDA(154660) - Imposte(14368) + DeltaCirc(-119889) = CFO(74846) - Invest(-1582) = FCF(73264) + DeltaDebt(-12556) - Dividendi(-31251) = DeltaCassa(29457)
     return {
         labels: ["EBITDA", "Imposte", "+Δ Circ.", "=CF Op.", "-Invest.", "=FCF", "+Δ Debt", "-Divid.", "=Δ Cassa"],
         datasets: [{
             data: [154660, -14368, -119889, 74846, -1582, 73264, -12556, -31251, 29457],
             backgroundColor: [ // Colori significativi
                 '#4CAF50', // EBITDA
                 '#F44336', // Imposte (-)
                 '#F44336', // Delta Circ. (-) in questo caso
                 '#2E8B57', // CF Op (=)
                 '#F44336', // Investimenti (-)
                 '#2E8B57', // FCF (=)
                 '#F44336', // Delta Debt (-)
                 '#FFC107', // Dividendi (-) - Warning color
                 '#4CAF50'  // Delta Cassa (=) - Positive color
             ]
         }]
     };
}
function getCashFlowTrendData() {
    // console.log("Fornitura dati per cashFlowTrendChart (Report Parte 5) - FLC HEALTHY EVOLUTION S.R.L.");
    // Fonte: PARTE5_flc_flussi_analysis.md (5.2.2)
    return {
        labels: ["2022", "2023", "2024"],
        datasets: [
            { label: "Cash Flow Operativo", data: [51077, -27395, 74846], borderColor: "rgba(77, 140, 87, 1)", fill: true, backgroundColor: "rgba(77, 140, 87, 0.1)"},
            { label: "Cash Flow Investimenti", data: [650, -4296, -1582], borderColor: "rgba(214, 34, 70, 1)", fill: true, backgroundColor: "rgba(214, 34, 70, 0.1)" },
            { label: "Variazione Netta di Cassa", data: [55262, -22671, 29457], borderColor: "rgba(25, 25, 112, 1)", fill: true, backgroundColor: "rgba(25, 25, 112, 0.1)" }
        ]
    };
}
function getCashFlowProjectionData() {
    // console.log("Fornitura dati per cashFlowProjectionChart (Report Parte 5) - FLC HEALTHY EVOLUTION S.R.L.");
    // Fonte: PARTE5_flc_flussi_analysis.md (5.2.3)
    return {
        labels: ["2024", "2025E", "2026E", "2027E", "2028E"],
        datasets: [
            // Dati 2024 reali + Proiezioni
            { label: "Cash Flow Operativo", data: [74846, 152038, 152038, 152038, 152038], type: 'bar', backgroundColor: "rgba(79, 109, 122, 0.7)", yAxisID: 'y' },
            // Usato CF Finanziamento come proxy Var Debiti
            { label: "Variazione Debiti Fin.", data: [-12556, 0, 0, 0, 0], type: 'bar', backgroundColor: "rgba(214, 34, 70, 0.7)", yAxisID: 'y' },
            { label: "Liquidità Finale", data: [99972, 260866, 421760, 582654, 743548], type: 'line', borderColor: "rgba(77, 140, 87, 1)", fill: false, yAxisID: 'y1' }
        ]
    };
}

// Dati Parte 6
function getZscoreData() {
    // console.log("Fornitura dati per zscoreChart (Report Parte 6) - FLC HEALTHY EVOLUTION S.R.L.");
    // Fonte: PARTE0_flc-irp-report.md (5), PARTE6_flc_rischi_analisi.md (6.2)
    return {
        labels: ["2022", "2023", "2024"],
        datasets: [
            { label: "Z-Score", data: [5.8, 5.9, 6.20], borderColor: "rgba(25, 25, 112, 1)", fill: false },
            { label: "Soglia Sicurezza", data: [2.99, 2.99, 2.99], borderColor: "rgba(77, 140, 87, 1)", borderDash: [5, 5], fill: false, pointRadius: 0 },
            { label: "Soglia Rischio", data: [1.81, 1.81, 1.81], borderColor: "rgba(214, 34, 70, 1)", borderDash: [5, 5], fill: false, pointRadius: 0 }
        ]
    };
}
function getRiskIndicatorsData() {
     // console.log("Fornitura dati per riskIndicatorsChart (Report Parte 6) - FLC HEALTHY EVOLUTION S.R.L.");
     // Fonte: PARTE6_flc_rischi_analisi.md (6.1, 6.9)
    return {
        labels: ["ROI", "ROS", "D/E (inv)", "Cop. Immob.", "DSO (inv)", "DPO"],
        datasets: [{
             label: "FLC HEALTHY EVOLUTION",
             data: [208, 136, 200, 149, 59, 182], // Normalizzato
             backgroundColor: "rgba(136, 141, 194, 0.5)", borderColor: "rgba(97, 103, 173, 1)", borderWidth: 2
            }, {
             label: "Target/Benchmark",
             data: [100, 100, 100, 100, 100, 100], // Benchmark normalizzato
             backgroundColor: "rgba(145, 190, 145, 0.4)", borderColor: "rgba(103, 167, 103, 1)", borderWidth: 2
        }]
    };
}
function getSensitivityData() {
    // console.log("Fornitura dati per sensitivityChart (Report Parte 6) - FLC HEALTHY EVOLUTION S.R.L.");
    // Fonte: PARTE6_flc_rischi_analisi.md (6.5)
     return {
         labels: ["Ricavi (%)", "Costi Fissi (%)", "Crediti Clienti (gg)", "Debiti Fornitori (gg)"],
         datasets: [{
             label: "Variazione Critica",
             data: [-36.19, 60.07, 35, -51], // Valori da Tabella 6.5.1
             backgroundColor: ["#F44336", "#4CAF50", "#F44336", "#F44336"] // Colori per impatto (negativo/positivo/negativo/negativo)
         }]
     };
}


// ======================================
// OPZIONI COMUNI PER I GRAFICI (INVARIATE)
// ======================================
// --- Utility di formattazione ---
function formatCurrency(value, decimals = 0) {
    if (value === null || value === undefined || isNaN(value)) return 'N/D';
    return new Intl.NumberFormat('it-IT', { style: 'currency', currency: 'EUR', minimumFractionDigits: decimals, maximumFractionDigits: decimals }).format(value);
}

function formatPercentage(value, decimals = 1) {
    if (value === null || value === undefined || isNaN(value)) return 'N/D';
    return value.toFixed(decimals) + '%';
}

const commonChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
            position: 'bottom',
            labels: { boxWidth: 12, padding: 15, font: { size: 11 } }
        },
        tooltip: {
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            titleFont: { weight: 'bold', size: 13 },
            bodyFont: { size: 12 },
            padding: 10,
            cornerRadius: 4,
            displayColors: true,
            boxPadding: 4,
            callbacks: { // Callback di default migliorato
                 label: function(context) {
                     let label = context.dataset.label || context.label || '';
                     if (label) label += ': ';
                     let value = context.parsed.y;
                      if (value === null || value === undefined) value = context.parsed.r; // Per radar

                     if (value !== null && value !== undefined) {
                         const axisID = context.dataset.yAxisID;
                         const labelText = context.label || ''; // Assicurati che labelText sia una stringa
                         const datasetLabel = context.dataset.label || ''; // Assicurati che datasetLabel sia una stringa

                          if (datasetLabel.includes('%') || (axisID === 'y1' && context.chart.options.scales?.y1?.title?.text.includes('%'))) {
                             label += formatPercentage(value);
                          } else if (datasetLabel.includes('(Giorni)') || labelText.includes('(gg)')) {
                             label += value.toFixed(0) + ' gg';
                          } else if (datasetLabel.includes('(x)') || labelText.includes('(x)') || datasetLabel.includes('PFN/EBITDA') || datasetLabel.includes('D/E') || datasetLabel.includes('Z-Score')) {
                             label += value.toFixed(2) + (datasetLabel.includes('Z-Score') ? '' : 'x');
                          } else if (datasetLabel.includes('Score') && !datasetLabel.includes('Z-Score')) {
                              label += value.toFixed(2);
                          } else if (datasetLabel.includes('Variazione Critica')) { // Per grafico sensitività
                               label += value.toFixed(2) + (labelText.includes('(gg)') ? ' gg' : '%');
                          }
                          else if (Math.abs(value) >= 1000000) {
                             label += formatCurrency(value / 1000000, 2) + ' M';
                         } else if (Math.abs(value) >= 1000) {
                             label += formatCurrency(value / 1000, 0) + ' K'; // Mostra K€ per valori >= 1000
                         } else if (Math.abs(value) < 1 && value !== 0) {
                             label += formatCurrency(value, 2); // Decimali per valori < 1
                         }
                         else {
                              label += formatCurrency(value, 0); // Valori assoluti < 1000 senza decimali
                         }
                     } else {
                         label += 'N/D';
                     }
                     return label;
                 }
             }
        }
    },
    scales: {
        x: {
            grid: { display: false },
            ticks: { font: { size: 11 } }
        },
        y: {
            grid: { color: '#e0e0e0', borderDash: [2, 3] },
            ticks: {
                font: { size: 11 },
                // Formattazione assi Y per K€ o M€
                 callback: function(value, index, ticks) {
                      if (Math.abs(value) >= 1000000) {
                          return (value / 1000000) + ' M';
                      } else if (Math.abs(value) >= 1000) {
                          return (value / 1000) + ' K';
                      } else if (Math.abs(value) < 10 && value !== 0) {
                           return value.toFixed(2); // Decimali per valori piccoli (es. rapporti)
                      } else if (Number.isInteger(value)) {
                          return value.toFixed(0); // Interi senza decimali
                      }
                      return value; // Default
                  }
            }
        },
        // Eventuale asse Y1 per percentuali o altri indici
        y1: {
            position: 'right',
            grid: { display: false }, // Nasconde griglia asse dx
            ticks: {
                 font: { size: 11 },
                 callback: function(value, index, ticks) {
                     // Esempio: Formattazione % per asse Y1
                     // if (context.chart.options.scales.y1.title.text.includes('%')) {
                         return value.toFixed(1) + '%';
                     // }
                     // return value.toFixed(1) + 'x'; // O altra unità
                 }
            }
        }
    },
    animation: { duration: 400 }
};

// Opzioni specifiche per grafici a torta/ciambella
const pieChartOptions = {
    ...commonChartOptions,
    cutout: '0%',
     plugins: {
         ...commonChartOptions.plugins,
        tooltip: {
             ...commonChartOptions.plugins.tooltip,
            callbacks: { // Callback specifico per Torta/Ciambella
                label: function(context) {
                    const label = context.label || '';
                    const value = context.raw || 0; // Usa valore raw (percentuale)
                    // Cerca il valore originale corrispondente
                    const originalValue = context.dataset._originalData && context.dataset._originalData.length > context.dataIndex
                                          ? context.dataset._originalData[context.dataIndex]
                                          : value; // Fallback se _originalData non è definito o non ha l'indice
                    const percentage = formatPercentage(value); // Formatta la percentuale
                    // Formatta il valore originale in K€ o M€ se necessario
                    let formattedOriginalValue;
                    if (Math.abs(originalValue) >= 1000000) {
                        formattedOriginalValue = formatCurrency(originalValue / 1000000, 2) + ' M';
                    } else if (Math.abs(originalValue) >= 1000) {
                         formattedOriginalValue = formatCurrency(originalValue / 1000, 0) + ' K';
                    } else {
                         formattedOriginalValue = formatCurrency(originalValue, 0);
                    }
                    return `${label}: ${formattedOriginalValue} (${percentage})`;
                }
            }
        }
     },
     scales: undefined // Rimuove gli assi per grafici a torta
};
const doughnutChartOptions = { ...pieChartOptions, cutout: '50%' };

// Opzioni specifiche per grafici radar
const radarChartOptions = {
     ...commonChartOptions,
      scales: {
         r: {
             angleLines: { color: '#e0e0e0' },
             grid: { color: '#e0e0e0' },
             pointLabels: { font: { size: 10 } },
             ticks: {
                 backdropColor: 'rgba(255, 255, 255, 0.75)',
                 font: { size: 9 },
                 maxTicksLimit: 5,
                 // callback: function(value) { return value + '%'; } // Esempio se scala è %
             },
             suggestedMin: 0,
             // suggestedMax: 150 // Adattare se necessario per i dati normalizzati
         }
      },
      plugins: {
          ...commonChartOptions.plugins,
          tooltip: {
              ...commonChartOptions.plugins.tooltip,
               callbacks: {
                   label: function(context) {
                       let label = context.dataset.label || '';
                       if (label) label += ': ';
                       if (context.parsed.r !== null) {
                          label += context.parsed.r.toFixed(1); // Valore asse radiale
                       }
                       return label;
                   }
               }
          }
      }
};

console.log("charts_config.js caricato e aggiornato con dati FLC HEALTHY EVOLUTION S.R.L. (dove disponibili).");