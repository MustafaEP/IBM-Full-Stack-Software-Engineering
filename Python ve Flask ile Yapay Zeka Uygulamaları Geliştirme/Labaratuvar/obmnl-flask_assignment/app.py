# Flask'tan gerekli kütüphaneleri içe aktar
from flask import Flask, redirect, request, render_template, url_for

# Flask uygulamasını oluştur
app = Flask(__name__)

# İşlemleri temsil eden örnek veri
transactions = [
    {'id': 1, 'date': '2023-06-01', 'amount': 100},
    {'id': 2, 'date': '2023-06-02', 'amount': -200},
    {'id': 3, 'date': '2023-06-03', 'amount': 300}
]

# Okuma işlemi: Tüm işlemleri listelemek için rota
@app.route("/")
def get_transactions():
    # İşlemler listesi şablonunu render et ve işlemler verisini geçir
    return render_template("transactions.html", transactions=transactions)

# Oluşturma işlemi: İşlem ekleme formunu görüntülemek ve işlemek için rota
@app.route("/add", methods=["GET", "POST"])
def add_transaction():
    if request.method == 'POST':
        # Yeni bir işlem nesnesi oluşturmak için form verilerini çıkar
        transaction = {
            'id': len(transactions) + 1,         # İşlemler listesinin mevcut uzunluğuna göre yeni bir ID oluştur
            'date': request.form['date'],        # Formdan 'date' alanının değerini al
            'amount': float(request.form['amount']) # Formdan 'amount' alanının değerini al ve float'a dönüştür
        }

        # Yeni işlemi işlemler listesine ekle
        transactions.append(transaction)

        # Yeni işlemi ekledikten sonra işlemler listesi sayfasına yönlendir
        return redirect(url_for("get_transactions"))

    # İstek yöntemi GET ise işlem ekleme formunu görüntülemek için form şablonunu render et
    return render_template("form.html")

# Güncelleme işlemi: İşlem düzenleme formunu görüntülemek ve işlemek için rota
@app.route("/edit/<int:transaction_id>", methods=["GET", "POST"])
def edit_transaction(transaction_id):
    if request.method == 'POST':
        # Form alanlarından güncellenmiş değerleri çıkar
        date = request.form['date']
        amount = float(request.form['amount'])

        # Eşleşen ID'ye sahip işlemi bul ve değerlerini güncelle
        for transaction in transactions:
            if transaction['id'] == transaction_id:
                transaction['date'] = date       # İşlemin 'date' alanını güncelle
                transaction['amount'] = amount   # İşlemin 'amount' alanını güncelle
                break                            # İşlem bulunduğunda ve güncellendiğinde döngüden çık

        # İşlemi güncelledikten sonra işlemler listesi sayfasına yönlendir
        return redirect(url_for("get_transactions"))

    # İstek yöntemi GET ise eşleşen ID'ye sahip işlemi bul ve düzenleme formunu render et
    for transaction in transactions:
        if transaction['id'] == transaction_id:
            # Düzenleme formu şablonunu render et ve düzenlenecek işlemi geçir
            return render_template("edit.html", transaction=transaction)

# Silme işlemi: Bir işlemi silmek için rota
@app.route("/delete/<int:transaction_id>")
def delete_transaction(transaction_id):
    # Eşleşen ID'ye sahip işlemi bul ve listeden çıkar
    for transaction in transactions:
        if transaction['id'] == transaction_id:
            transactions.remove(transaction)  # İşlemi işlemler listesinden çıkar
            break                            # İşlem bulunduğunda ve çıkarıldığında döngüden çık

    # İşlemi sildikten sonra işlemler listesi sayfasına yönlendir
    return redirect(url_for("get_transactions"))

# Flask uygulamasını çalıştır
if __name__ == "__main__":
    app.run(debug=True)