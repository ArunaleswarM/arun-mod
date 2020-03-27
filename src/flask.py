from flask import Flask, render_template, request, redirect,url_for
import json
app = Flask(__name__)
def writeToJSONFile(path, fileName, data):
    filePathNameWExt = './' + path + '/' + fileName + '.json'
    with open(filePathNameWExt, 'a') as fp:
        json.dump(data, fp)
@app.route('/new', methods=['GET', 'POST'])
def ind():
    if request.method == 'POST':
            data = {}
            check1=request.form.get('test1')
            index=request.form.get('test2')
            data['db']=check1
            data['password']=index
            writeToJSONFile('./','file-name',data)
    return render_template('new.html')

if __name__ == '__main__':
    app.run(debug=True)