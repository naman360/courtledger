 
from fastapi import FastAPI, UploadFile, Form,File
import cloudinary
import cloudinary.uploader
from fastapi.middleware.cors import CORSMiddleware
 

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=['*'],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
# Configure Cloudinary credentials
cloudinary.config(
    cloud_name='moibit',
    api_key='368643671927417',
    api_secret='q2l37dcCA701JQlidDMoJaFtOY4'
)
 
@app.post('/upload')
async def upload_file(file: UploadFile = File(...), upload_name: str = Form(...)):
    try:
        # Upload the file to Cloudinary
        result = cloudinary.uploader.upload(file.file, public_id=upload_name)
        return f"File uploaded successfully. Public ID: {result['public_id']}"
    except Exception as e:
        return f"Error uploading file: {str(e)}", 500
 
if __name__ == '__main__':
    import uvicorn
    uvicorn.run(app, host='0.0.0.0', port=8000)
 
