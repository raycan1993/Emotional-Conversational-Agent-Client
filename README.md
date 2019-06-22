# Emotional Conversational Agent (Client)
## Kontext
Anhand der zunehmenden Relevanz und Nutzung von KI insbesondere in Form von digitalen Assistenten, nimmt daraus resultierend die Kommunikation mit diesen zu. Bei-spiele dafür sind Verkaufs- bots auf Webseiten oder Supportchats, welche auf einer KI basieren. Doch lässt sich bisher kaum oder keine emotionale Kognition in diesen KI feststellen, welche möglicherweise weitere Vorteile für die Interaktion zwischen Men-schen und Maschine beinhaltet.

Im Rahmen dieser Seminararbeit soll aus diesen Gründen ein emotionaler, auf Textver-arbeitung spezialisierter Conversational Agent entwickelt werden. Es gilt bestehende NLP mit einem emotionalen System und Kognition zu erweitern, um herauszufinden, ob eine Realisierung möglich ist. 

## Client
Auf der Client-Instanz mit welchem die Anwendenden interagieren befindet sich der Chat, welcher zur Interaktion benötigt wird.So zeigt der Chat mithilfe von Emoji die aktuelle Emotion des Agenten an, welche auf den durchschnittlichen Konversationsbedingungen von Menschen, wie Lese-, Reaktions- und Antwortzeit, basieren. Zusätzlich wird mithilfe einer Schreib Animation in Form von drei Punkten dem User angezeigt, dass der Agent eine Nachricht verfasst, um die Menschlichkeit zu steigern. Die Usernachricht wird über einen POST Request in Form eines JSON-Strings an den Server übermittelt. 


