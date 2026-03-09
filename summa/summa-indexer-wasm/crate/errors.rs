use std::io;

#[derive(thiserror::Error, Debug)]
pub enum Error {
    #[error("core: {0}")]
    Core(#[from] summa_core::Error),
    #[error("index_error: {0}")]
    Index(#[from] tantivy::TantivyError),
    #[error("serialization_error: {0}")]
    Serialization(String),
}

impl From<serde_json::Error> for Error {
    fn from(error: serde_json::Error) -> Self {
        Error::Serialization(format!("{error:?}"))
    }
}

impl From<Error> for io::Error {
    fn from(error: Error) -> Self {
        io::Error::new(io::ErrorKind::Other, error)
    }
}

impl From<strfmt::FmtError> for Error {
    fn from(error: strfmt::FmtError) -> Self {
        Error::Serialization(format!("{error:?}"))
    }
}

impl From<Error> for wasm_bindgen::JsValue {
    fn from(error: Error) -> Self {
        wasm_bindgen::JsValue::from(format!("{error:?}"))
    }
}

pub type SummaWasmResult<T> = Result<T, Error>;
