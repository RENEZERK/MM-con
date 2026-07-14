from modal import App

app = App("mindmap-qwen")

import modal

image = (
    modal.Image.debian_slim()
    .pip_install(
        "torch",
        "transformers",
        "vllm"
    )
)

gpu="L4"

@app.function(
    image=image,
    gpu="L4",
    timeout=600,
)
def hello():
    print("Running")

    @app.cls(
    gpu="L4",
    image=image,
)
class Qwen:@modal.enter()
def load(self):

    @modal.method()
def generate(self, prompt):
    ...{
    "response": answer
}
    
    from fastapi import FastAPI

web = FastAPI()