# Emotional Conversational Agent (Client)
### Kontext
Anhand der zunehmenden Relevanz und Nutzung von KI insbesondere in Form von digitalen Assistenten, nimmt daraus resultierend die Kommunikation mit diesen zu. Bei-spiele dafür sind Verkaufs- bots auf Webseiten oder Supportchats, welche auf einer KI basieren. Doch lässt sich bisher kaum oder keine emotionale Kognition in diesen KI feststellen, welche möglicherweise weitere Vorteile für die Interaktion zwischen Men-schen und Maschine beinhaltet.

Im Rahmen dieser Seminararbeit soll aus diesen Gründen ein emotionaler, auf Textver-arbeitung spezialisierter Conversational Agent entwickelt werden. Es gilt bestehende NLP mit einem emotionalen System und Kognition zu erweitern, um herauszufinden, ob eine Realisierung möglich ist. 

## Server
Auf dem Server werden ein Handler und Agent-Instanzen ausgeführt. Ersterer instanzi-iert pro Client eine Agenteninstanz und ist dafür zuständig, dass alle Nachrichten vom richtigen Client an den korrekten Agenten zugestellt werden und umgekehrt. Dies erfolgt durch eine Timestamp-ID welche bei der Instanziierung eines Clients erstellt wird und beiden, Client und Agent, zugewiesen werden.

## Verwendete Technologien
<ul>
  <li>Node.js</li>
  <li>Express.js</li>
  <li>sentiment (Node.js package für Sentiment-Analysis)</li>
  <li>Eliza</li>
</ul>
