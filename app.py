from flask import Flask, render_template, request, redirect, url_for, flash

import csv
import os
app = Flask(__name__)




@app.route('/')
def home():
    return render_template('index.html')

@app.route('/about')
def about():
    return render_template('about.html')

@app.route('/product')
def products():
    return render_template('product.html')

@app.route('/contact')
def contact():
    return render_template('contact.html')

@app.route('/submit_form', methods=['POST'])
def submit_form():
    try:
       
        first_name = request.form['firstName']
        last_name = request.form['lastName']
        email = request.form['email']
        mobile = request.form['mobile']
        message = request.form['message']

      
        csv_file_path = 'client_data.csv'

     
        file_exists = os.path.isfile(csv_file_path)

        
        with open(csv_file_path, mode='a', newline='') as file:
            writer = csv.writer(file)

            
            if not file_exists:
                writer.writerow(['First Name', 'Last Name', 'Email', 'Mobile', 'Message'])

            writer.writerow([first_name, last_name, email, mobile, message])

 
        return redirect(url_for('thank_you', first_name=first_name, last_name=last_name))
    except Exception as e:
        print(f"Error: {e}")
        return "An error occurred while processing your request."

@app.route('/thank_you')
def thank_you():
    first_name = request.args.get('first_name')
    last_name = request.args.get('last_name')
    return render_template('thankyou.html', first_name=first_name, last_name=last_name)






if __name__ == '__main__':
    app.run(debug=True)
